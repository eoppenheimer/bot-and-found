import { sqliteConnection } from "../../config";
import { EJSON } from "bson";


/** SQLite3 BLOB type as a buffer. */
export type Blob = Uint8Array<ArrayBufferLike>;

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
type SQLiteCompatible = number | string | bigint | Uint8Array<ArrayBufferLike> | null;

/** This is an output that SQLite will always return to us directly from the database. */
type SQLiteEntry<T> = Record<keyof T, SQLiteCompatible>

/** Creates a model template to be used across Mongo databases. */
export abstract class SQLiteModel<T extends Record<string, any>> {

    /** The name of the SQLite table. */
    protected tableName: string;

    /** The output types of each value. */
    protected binds: Record<keyof T, BindType>;

    protected keys: (keyof T)[];

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
     * Fetches the first entry that matches the SQLite ID.
     * @param id The BLOB used to access the ID.
     */
    findOne(id: Blob) {

        /** The SQL statement to find a new single entry. */
        const stmt = this.db.prepare(`SELECT * FROM ${this.tableName} WHERE id = ?`);
        
        /** The creation result. */
        const result = stmt.get(id);

        /** The sanitized result. */
        const sanitized = this.sanitizeOutput(result);

        return sanitized;
    }

    /**
     * Creates a generator that can be used to iterate over a list of results from SQLite.
     * @param idList The list of IDs that you want to filter.
     * @param filter Optional argument to pick only a select few columns.
     */
    *find<U extends (keyof T)[] | undefined = undefined>(idList: Blob[], filter?: U):
    Generator<GetModel<T,U>> {

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
     * Creates a generator that can be used to iterate over a list of results from SQLite.
     * @param idList The list of IDs that you want to filter.
     */
    *findPropertyById(property: keyof T | "*" = "*", idList: Blob[]) {

        /** These are the stringified "?" symbols that are supplied into the VALUES statement. */
        const placeholders = idList.map(() => "?").join(",");

        /** The SQL statement to find all matches of entries. */
        const stmt = this.db.prepare(`SELECT ${String(property)} FROM ${this.tableName} WHERE id IN (${placeholders})`);
        
        // Use SQLite's iteration feature to stagger this to only a few entries.
        for (const result of stmt.iterate(...idList)) {

            // Sanitize the single result and yield it.
            yield result;
        }
    }
}

/** This will first check if `U` is undefined. If so, then it will return `T` plainly. However, if `U` exists, then it will Pick from `T` only the keys that are found in `U`  */
type GetModel<T,U> = U extends undefined ? T : Pick<T, U extends (keyof T)[] ? U[number] : never>