import dotenv from "dotenv";
import Database from "better-sqlite3";
import path from "path";
import initTableSQL from "./initTable.sql";
dotenv.config();

const {DATABASE_PATH} = process.env;
if (!DATABASE_PATH) throw Error("Missing DATABASE_PATH.");

class SQLiteConnection {
    private static instance: SQLiteConnection;
    private db: Database.Database;

    public static getInstance(): SQLiteConnection {
        if (!SQLiteConnection.instance) {
            SQLiteConnection.instance = new SQLiteConnection();
        }
        return SQLiteConnection.instance;
    }

    private constructor() {
        const fileName = path.join(DATABASE_PATH!, "botAndFound.db");
        this.db = new Database(fileName);
        this.db.pragma("journal_mode = WAL");
        this.initTables();
        console.log(`✅ SQLite connected at ${DATABASE_PATH}`);
    }

    private initTables() {
        const sql = initTableSQL;
        this.db.exec(sql);
    }

    public getDb(): Database.Database {
        return this.db;
    }

    public close() {
        this.db.close();
    }
}

export const sqliteConnection = SQLiteConnection.getInstance();