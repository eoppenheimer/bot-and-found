
import { mongoConnection, ObjectId } from "../../config";
import { Collection, Filter, FindOptions, Document } from "mongodb";

/** Creates a model template to be used across Mongo databases. */
export abstract class MongoModel<T extends Document> {

    /** The name of the MongoDB collection. */
    collectionName: string;

    /** The collection pointer. */
    protected collection: Collection<T> | null = null;

    /**
     * Creates a MongoDB model, with lazy async methods that await for connection.
     * @param collectionName The name of the MongoDB collection.
     */
    constructor(collectionName: string) {
        this.collectionName = collectionName;
    }

    /** Each time the database is accessed, check that it does indeed exist! This should be the return result. */
    private async getCollection() {
        if (this.collection) return this.collection;
        if (!mongoConnection.isConnected) {
            await mongoConnection.connect();
        }

        this.collection = mongoConnection.getDb().collection<T>(this.collectionName);
        return this.collection;
    }

    /**
     * Creates a cursor for a filter that can be used to iterate over results from MongoDB
     * @param filter The filter predicate. If unspecified, then all documents in the collection will match the predicate
     * @param options Optional settings for the command
     */
    async find(filter: Filter<T> = {}, options?: FindOptions) {
        const collection = await this.getCollection();
        return collection.find(filter, options);
    }

    /**
     * Fetches the first document that matches the filter
     * @param filter Query for find Operation
     */
    async findOne(filter: Filter<T>) {
        const collection = await this.getCollection();
        return await collection.findOne(filter);
    }

    /**
     * Fetches the first document that matches the Mongo ObjectId.
     * @param _id Does not require casting as `new ObjectId(_id)`
     */
    async findById(_id: string) {
        const collection = await this.getCollection();
        return await collection.findOne({ _id: new ObjectId(_id) } as Filter<T>);
    }

}