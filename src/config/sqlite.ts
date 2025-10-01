import dotenv from "dotenv";
import Database from "better-sqlite3";
import path from "path";
dotenv.config();

const {SQLITE_PATH} = process.env;
if (!SQLITE_PATH) throw Error("Missing SQLITE_PATH.");

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
        const fileName = path.join(SQLITE_PATH!);
        this.db = new Database(fileName);
        this.db.pragma("journal_mode = WAL");
        this.initTables();
        console.log("✅ SQLite connected");
    }

    private initTables() {
        const sql = `
CREATE TABLE IF NOT EXISTS activityConfigs (
    id BLOB PRIMARY KEY,
    commitId BLOB,
    timestamp TEXT,
    config TEXT
) WITHOUT ROWID;

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);
        `;
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