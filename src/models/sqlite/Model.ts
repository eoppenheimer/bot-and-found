import { sqliteConnection } from "../../config";
import { EJSON } from "bson";


/** SQLite3 BLOB type as a buffer. */
export type Blob = Uint8Array;

/** These are the types that I have programmed switches to be fed into SQLite. The first element outlines its constructor type, and the second dicates whether it is optional or not. */
export type BindType = [
    NumberConstructor | StringConstructor | BigInt64ArrayConstructor | BufferConstructor | DateConstructor | ObjectConstructor,
    boolean
];

/** This is the genuine value that is stored after realizing a bind. */
type BindRealized = InstanceType<BindType[0]> | undefined;


/** Check if the bind argument satisfies TypeScript. ie. must be a record of each constructor and whether they are optional or not. */
export type _CheckIfSatisfiesBindings = Record<string, BindType>


/** SQLite3 can only bind numbers, strings, bigints, buffers, and null. */
type SQLiteCompatible = number | string | bigint | Blob | null;

/** This is an output that SQLite will always return to us directly from the database. */
type SQLiteEntry<T> = Record<keyof T, SQLiteCompatible>

/** Creates a model template to be used across Mongo databases. */
export abstract class SQLiteModel<T extends Record<string, any> & { id: SQLiteCompatible }> {

    /** The name of the SQLite3 table. */
    readonly tableName: string;

    /** The output types of each value. */
    protected binds: Record<keyof T, BindType>;

    /** The column names of the SQLite3 table. */
    readonly keys: ReadonlyArray<keyof T>;

    /** The connection pointer. */
    protected db;

    /**
     * Creates a SQLite model, with lazy methods that use connection.
     * @param tableName The name of the SQLite table.
     * @param binds The output types of each value, accompanied by boolean encoding whether they are mandatory or optional.
     */
    constructor(tableName: string, binds: Record<keyof T, BindType>) {
        this.db = sqliteConnection.getDb();
        this.tableName = tableName;
        this.binds = binds;
        this.keys = Object.keys(this.binds) as (keyof typeof this.binds)[];
    }

    /**
     * Returns a satinized object that is safe to save in the database. This will prevent SQLite3 from yelling at us in the future.
     * @param input The object we are sanitizing.
     * @returns An equivalent object using the correct SQLite3 values.
     */
    private sanitizeInput(input: Record<string, any>): SQLiteEntry<T> {

        /** This is an object that has been binded to the correct SQLite values. */
        const sanitized: {[key: string]: SQLiteCompatible} = {};

        /** These are the keys we are looking to sanitize. */
        const keysInQuestion = Object.keys(input);

        /** Any keys that might be missing. */
        const missingKeys = keysInQuestion.filter(x=>!this.keys.includes(x));
        if (missingKeys.length > 0) {
            throw Error(`KeyError: Supplied unknown keys ${JSON.stringify(missingKeys)} to table ${this.tableName}, but only accepts ${JSON.stringify(this.keys)}.`);
        }

        if (keysInQuestion.length !== this.keys.length) {
            throw Error(`KeyError: Supplied ${keysInQuestion.length} key(s) to table ${this.tableName} ${JSON.stringify(keysInQuestion)}, but expected ${this.keys.length} ${JSON.stringify(this.keys)}.`);
        }


        for (const key of keysInQuestion) {
            const valueInQuestion = input[key];

            let valueSanitized: SQLiteCompatible;

            if (valueInQuestion === undefined || valueInQuestion === null) {
                valueSanitized = null;
            }
            else if (typeof valueInQuestion === "number" || typeof valueInQuestion === "string" || typeof valueInQuestion === "bigint") {
                valueSanitized = valueInQuestion;
            }
            else if (Buffer.isBuffer(valueInQuestion)) {
                if (valueInQuestion.byteLength !== 12) throw Error(`SQLite3 TypeError: Non compatible buffer size ${valueInQuestion.byteLength} was supplied in ${this.tableName} -> ${key}. Must be size 12.`);
                valueSanitized = valueInQuestion;
            }
            else if (valueInQuestion instanceof Date) {
                valueSanitized = valueInQuestion.toISOString();
            }
            else if (typeof valueInQuestion === "object") {
                valueSanitized = EJSON.stringify(valueInQuestion, undefined, 0);
            }
            
            else {
                throw Error(`SQLite3 TypeError: Non compatible type \`${typeof valueInQuestion}\` was supplied in ${this.tableName} -> ${key}.`);
            }
            
            sanitized[key] = valueSanitized;
        }
        
        return sanitized as SQLiteEntry<T>;
    }

    /**
     * Returns a satinized object that is safe to extract from the database. This will prevent TypeScript from yelling at us in the future.
     * @param outputAsUnknown The SQLite3 object we are sanitizing.
     * @param checkFull Check if this is expected to return all # of columns. When false, there is a slightly higher chance for bad datasets to be ignored.
     * @returns An equivalent object using the correct TypeScript values.
     */
    private sanitizeOutput(outputAsUnknown: unknown, checkFull=true): T | undefined {

        if (!outputAsUnknown) return undefined;

        /** The SQLite3 object we are sanitizing, with proper type casting. */
        const output = outputAsUnknown as SQLiteEntry<T>;

        /** This is an object that has been binded to the correct SQLite values. */
        const sanitized: {[key: string]: BindRealized} = {};

        /** These are the keys we are looking to sanitize. */
        const keysInQuestion = Object.keys(output);

        if (checkFull) {
            /** Any keys that might be missing. */
            const missingKeys = keysInQuestion.filter(x=>!this.keys.includes(x));
            if (missingKeys.length > 0) {
                throw Error(`KeyError: Received unknown keys ${JSON.stringify(missingKeys)} from table ${this.tableName}, but should only return ${JSON.stringify(this.keys)}.`);
            }

            if (keysInQuestion.length !== this.keys.length) {
                throw Error(`KeyError: Received ${keysInQuestion.length} key(s) from table ${this.tableName} ${JSON.stringify(keysInQuestion)}, but expected ${this.keys.length} ${JSON.stringify(this.keys)}.`);
            }
        }


        for (const key of keysInQuestion) {
            const valueInQuestion = output[key];

            const bind = this.binds[key];

            let valueSanitized: BindRealized;

            if (valueInQuestion === null) {
                // Check if this is an optional criteria.
                if (bind[1] === true) throw Error(`SQLite3 TypeError: Expected a mandatory value in ${this.tableName} -> ${key}, but received \`null\` instead.`);
                valueSanitized = undefined;
            }
            else if (bind[0] === Number) {
                if (typeof valueInQuestion !== "number") throw Error(`SQLite3 TypeError: Expected to receive \`number\` according to bindings in ${this.tableName} -> ${key}, but received \`${typeof valueInQuestion}\` instead.`);
                valueSanitized = valueInQuestion;
            }
            else if (bind[0] === String) {
                if (typeof valueInQuestion !== "string") throw Error(`SQLite3 TypeError: Expected to receive \`string\` according to bindings in ${this.tableName} -> ${key}, but received \`${typeof valueInQuestion}\` instead.`);
                valueSanitized = valueInQuestion;
            }
            else if (bind[0] === BigInt64Array) {
                if (typeof valueInQuestion !== "bigint") throw Error(`SQLite3 TypeError: Expected to receive \`bigint\` according to bindings in ${this.tableName} -> ${key}, but received \`${typeof valueInQuestion}\` instead.`);
                valueSanitized = valueInQuestion;
            }
            else if (bind[0] === Buffer) {
                if (!Buffer.isBuffer(valueInQuestion)) throw Error(`SQLite3 TypeError: Expected to receive \`Buffer\` according to bindings in ${this.tableName} -> ${key}, but received \`${typeof valueInQuestion}\` instead.`);
                if (valueInQuestion.byteLength !== 12) throw Error(`SQLite3 TypeError: Non compatible buffer size ${valueInQuestion.byteLength} was received in ${this.tableName} -> ${key}. Must be size 12.`);
                valueSanitized = valueInQuestion;
            }
            else if (bind[0] === Date) {
                if (typeof valueInQuestion !== "string") throw Error(`SQLite3 TypeError: Expected to receive \`string\` according to bindings in ${this.tableName} -> ${key}, but received \`${typeof valueInQuestion}\` instead.`);
                valueSanitized = new Date(valueInQuestion);
            }
            else if (bind[0] === Object) {
                if (typeof valueInQuestion !== "string") throw Error(`SQLite3 TypeError: Expected to receive \`string\` according to bindings in ${this.tableName} -> ${key}, but received \`${typeof valueInQuestion}\` instead.`);
                try {
                    valueSanitized = EJSON.parse(valueInQuestion);
                }
                catch (err) {
                    throw Error(`SQLite3 TypeError: Expected to receive valid JSON according to bindings in ${this.tableName} -> ${key}, but failed to parse.\n${err}`);
                }
            }
            else {
                throw Error(`SQLite3 TypeError: Provided undefined bind type \`${bind}\` was supplied in ${this.tableName} -> ${key}.`);
            }
            
            sanitized[key] = valueSanitized;
        }
        
        return sanitized as T;
    }
    

    /**
     * Saves a single entry into the SQLite3 database.
     * @param entry The entry to be inserted into the database.
     */
    create(entry: T) {

        /** The satinized entry. */
        const sanitized = this.sanitizeInput(entry);

        /** These are the stringified column names that are supplied into the INSERT statement. */
        const keys = this.keys.join(",");

        /** These are the stringified "?" symbols that are supplied into the VALUES statement. */
        const placeholders = this.keys.map(() => "?").join(",");

        /** The SQL statement to create a new single entry. */
        const stmt = this.db.prepare(`INSERT INTO ${this.tableName} (${keys})\nVALUES (${placeholders})`);

        /** The SQL compatible values that are to be inserted. */
        const insertValues: SQLiteCompatible[] = this.keys.map(key => sanitized[key]);

        /** The creation result. */
        const result = stmt.run(...insertValues);

        return result;
    }

    /**
     * Overwrites a single entry in the SQLite3 database.
     * @param entry The entry to be inserted or replaced in the database.
     */
    overwrite(entry: T) {

        /** The satinized entry. */
        const sanitized = this.sanitizeInput(entry);

        /** These are the stringified column names that are supplied into the INSERT OR REPLACE statement. */
        const keys = this.keys.join(",");

        /** These are the stringified "?" symbols that are supplied into the VALUES statement. */
        const placeholders = this.keys.map(() => "?").join(",");

        /** The SQL statement to overwrite an existing entry or create a new one. */
        const stmt = this.db.prepare(`INSERT OR REPLACE INTO ${this.tableName} (${keys})\nVALUES (${placeholders})`);

        /** The SQL compatible values that are to be inserted or replaced. */
        const insertValues: SQLiteCompatible[] = this.keys.map(key => sanitized[key]);

        /** The overwrite result. */
        const result = stmt.run(...insertValues);

        return result;
    }


    /**
     * Checks if an entry with the specified ID already exists in the SQLite3 database.
     * @param id The ID to check for existence in the database.
     * @returns `true` if the ID exists, `false` otherwise.
     */
    exists(id: T["id"]): boolean {

        /** The SQL statement to check if an entry with the given ID exists. */
        const stmt = this.db.prepare(`SELECT 1 FROM ${this.tableName} WHERE id = ? LIMIT 1`);

        /** The query result - will be undefined if no row is found. */
        const result = stmt.get(id);

        /** Returns true if a row was found, false otherwise. */
        return result !== undefined;
    }

    /**
     * Fetches the first entry that matches the SQLite ID.
     * @param id The ID used to access the entry.
     */
    findOne(id: T["id"]) {

        /** The SQL statement to find a new single entry. */
        const stmt = this.db.prepare(`SELECT * FROM ${this.tableName} WHERE id = ?`);
        
        /** The creation result. */
        const result = stmt.get(id);

        /** The sanitized result. */
        const sanitized = this.sanitizeOutput(result);

        return sanitized;
    }

    /**
     * Creates a generator that can be used to iterate over a list of results from SQLite3, provided a list of IDs.
     * @param idList The list of IDs that you want to filter.
     * @param filter Optional argument to pick only a select few columns.
     */
    *findMany<U extends (keyof T)[] | undefined = undefined>(idList: T["id"][], filter?: U):
    Generator<GetModel<T,U>> {

        // Return early if no IDs are provided. //
        if (idList.length === 0) return;

        /** The column names to filter to. Defaults to `*` when selecting all columns. */
        const columnNames = filter === undefined ? "*" : filter.join(",");

        /** These are the stringified "?" symbols that are supplied into the VALUES statement. */
        const placeholders = idList.map(() => "?").join(",");

        /** The SQL statement to find all matches of entries. */
        const stmt = this.db.prepare(`SELECT ${columnNames} FROM ${this.tableName} WHERE id IN (${placeholders})`);
        
        // Use SQLite's iteration feature to stagger this to only a few entries.
        for (const result of stmt.iterate(...idList)) {

            // Sanitize the single result and yield it.
            yield this.sanitizeOutput(result, filter === undefined) as GetModel<T,U>;
        }
    }

    /**
     * Creates a generator that can be used to iterate over all entries that exist in an SQLite table.
     * @param filter Optional argument to pick only a select few columns.
     */
    *findAll<U extends (keyof T)[] | undefined = undefined>(filter?: U):
    Generator<GetModel<T,U>> {

        /** The column names to filter to. Defaults to `*` when selecting all columns. */
        const columnNames = filter === undefined ? "*" : filter.join(",");

        /** The SQL statement to find all matches of entries. */
        const stmt = this.db.prepare(`SELECT ${columnNames} FROM ${this.tableName}`);
        
        // Use SQLite's iteration feature to stagger this to only a few entries.
        for (const result of stmt.iterate()) {

            // Sanitize the single result and yield it.
            yield this.sanitizeOutput(result, filter === undefined) as GetModel<T,U>;
        }
    }

    /**
     * Deletes a single entry with the specified ID from the SQLite3 database.
     * @param id The ID of the entry to be deleted from the database.
     * @returns The deletion result containing information about the operation.
     */
    deleteOne(id: T["id"]) {

        /** The SQL statement to delete a single entry with the specified ID. */
        const stmt = this.db.prepare(`DELETE FROM ${this.tableName} WHERE id = ?`);

        /** The deletion result. */
        const result = stmt.run(id);

        return result;
    }

    /**
     * Deletes multiple entries with the specified IDs from the SQLite3 database.
     * @param idList The array of IDs to be deleted from the database.
     * @returns The deletion result containing information about the operation.
     */
    deleteMany(idList: T["id"][]) {

        // Return early if no IDs are provided.
        if (idList.length === 0) {
            return { changes: 0, lastInsertRowid: 0 };
        }

        /** These are the stringified "?" symbols that are supplied into the IN statement. */
        const placeholders = idList.map(() => "?").join(",");

        /** The SQL statement to delete multiple entries with the specified IDs. */
        const stmt = this.db.prepare(`DELETE FROM ${this.tableName} WHERE id IN (${placeholders})`);

        /** The deletion result. */
        const result = stmt.run(...idList);

        return result;
    }

    /**
     * Deletes all entries from the SQLite3 database table.
     * @param confirm Set to true to confirm deletion of all entries.
     * @returns The deletion result containing information about the operation.
     */
    deleteAll(confirm: boolean = false) {

        // Safety check to prevent accidental deletion of all data.
        if (!confirm) throw new Error("Must confirm deletion by passing `true` as parameter.");

        /** The SQL statement to delete all entries from the table. */
        const stmt = this.db.prepare(`DELETE FROM ${this.tableName}`);

        /** The deletion result. */
        const result = stmt.run();

        return result;
    }

}

/** This will first check if `U` is undefined. If so, then it will return `T` plainly. However, if `U` exists, then it will Pick from `T` only the keys that are found in `U`.  */
type GetModel<T,U> = U extends undefined ? T : Pick<T, U extends (keyof T)[] ? U[number] : never>