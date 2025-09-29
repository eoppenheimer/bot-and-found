import { MongoClient, Db, Collection } from "mongodb";

class MongoDBConnection {
    private static instance: MongoDBConnection;
    private db: Db | null = null;

    private constructor() {}

    public static getInstance(): MongoDBConnection {
        if (!MongoDBConnection.instance) {
            MongoDBConnection.instance = new MongoDBConnection();
        }
        return MongoDBConnection.instance;
    }

    /** Connect to the MongoDB database. */
    public async connect(): Promise<void> {
        if (this.db) return; // Already connected

        const {MONGODB_URI_DEVCI} = process.env;
        if (!MONGODB_URI_DEVCI) throw Error("Missing MONGODB_URI_DEVCI.");

        const client = new MongoClient(MONGODB_URI_DEVCI);
        await client.connect();
        this.db = client.db("classroom-devci");

        console.log(`MongoDB is connected at ${MONGODB_URI_DEVCI}`);
    }

    public getDb(): Db {
        if (!this.db) {
            throw new Error("Attempted to run MongoDBConnection.getDb() before establishing a connection. MongoDB is not connected.");
        }
        return this.db;
    }

    get isConnected() {
        return !!this.db;
    }

    public collection<T extends Document>(name: string): Collection<T> {
        return this.getDb().collection(name);
    }
}

/** The MongoDB connection to the Amplify Classroom database. */
export const mongoConnection = MongoDBConnection.getInstance();
export { ObjectId } from "mongodb";