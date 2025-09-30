import { sqliteConnection } from "../../config";

export type BindType = StringConstructor | ObjectConstructor | DateConstructor | NumberConstructor | BufferConstructor;

export type BindSatisfies = Record<string, BindType>

/** Creates a model template to be used across Mongo databases. */
export abstract class SQLiteModel<T> {

    /** The name of the SQLite table. */
    protected tableName: string;

    /** The output types of each value. */
    protected binds: Record<keyof T, BindType>;

    /** The connection pointer. */
    protected db;

    /**
     * Creates a SQLite model, with lazy methods that use connection.
     * @param tableName The name of the SQLite table.
     */
    constructor(tableName: string, binds: Record<keyof T, BindType>) {
        this.db = sqliteConnection.getDb();
        this.tableName = tableName;
        this.binds = binds;
    }

    /**
     * Creates a cursor for a filter that can be used to iterate over results from SQLite
     * @param filter The filter predicate. If unspecified, then all documents in the collection will match the predicate
     * @param options Optional settings for the command
     */
    async find(filter: Filter<T> = {}, options?: FindOptions) {
        return collection.find(filter, options);
    }


    /**
     * Fetches the first document that matches the SQLite BLOB id.
     * @param id The Buffer used to access the ID.
     */
    findById(id: Blob) {

        const stmt = this.db.prepare(`SELECT * FROM ${this.tableName} WHERE id = ?`);
        const result = stmt.get(id) as undefined | Record<keyof T, number | string | Buffer | undefined>;

        if (result === undefined) return undefined;

        const output = {} as Partial<T>;

        for (const key of Object.keys(this.binds) as (keyof typeof this.binds)[]) {
            
            const value = result[key];

            if (value === undefined) {
                output[key] = undefined;
                continue;
            }

            const bind = this.binds[key];

            if (bind === String) {
                if (typeof value !== "string") throw Error(`Expected a string for column ${JSON.stringify(key)}. Got ${typeof value} instead.`);
                output[key] = value;
            }
            else if (bind === Number) {
                if (typeof value !== "number") throw Error(`Expected a number for column ${JSON.stringify(key)}. Got ${typeof value} instead.`);
                output[key] = undefined;
            }
            else if (bind === Buffer) {
                if (!Buffer.isBuffer(value)) throw Error(`Expected a buffer for column ${JSON.stringify(key)}. Got ${value} instead.`);
            }
            
            



            console.log(value);
        }

        

        return {
            id: output.id,
            commit_id: output.commit_id,
            edit_ts: new Date(output.edit_ts),
            config: JSON.parse(output.config)
        };
    }

    /**
     * Fetches the first document that matches the filter
     * @param filter Query for find Operation
     */
    async findOne(filter: Filter<T>) {
        return await collection.findOne(filter);
    }

    getActivityById(id: Blob) {
        const stmt = this.db.prepare("SELECT * FROM activity_configs WHERE id = ?");
        const output = stmt.get(id) as {
            id: Blob,
            commit_id: Blob,
            edit_ts: string,
            config: string
        };

        return {
            id: output.id,
            commit_id: output.commit_id,
            edit_ts: new Date(output.edit_ts),
            config: JSON.parse(output.config)
        };
    }

    getActivityAll(idList: Blob[]) {
        const placeholders = idList.map(() => "?").join(",");
        const query = `SELECT * FROM activity_configs WHERE id IN (${placeholders})`;
        const stmt = this.db.prepare(query);
        return stmt.iterate(...idList);
    }

}