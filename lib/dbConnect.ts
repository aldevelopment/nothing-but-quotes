import mongoose from "mongoose";
import config from "../config";

function getMongoURI(
    method: string,
    username: string,
    password: string,
    host: string,
    params: string
): string {
    return method + "://" + username + ":" + password + "@" + host + "/?" + params;
}

export default async function connectToDB(
    callback: (err: any, connection: DBConnection) => void
): Promise<DBConnection> {
    try {
        const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_METHOD, MONGO_HOST, MONGO_PARAMS } = config();
        const uri = getMongoURI(
            MONGO_METHOD,
            MONGO_USERNAME,
            MONGO_PASSWORD,
            MONGO_HOST,
            MONGO_PARAMS
        );

        let cachedConnection: CachedDBConnection = global.dbConnection;

        if (!cachedConnection) {
            cachedConnection = global.dbConnection = {
                connection: null,
                promise: null,
            };
        }

        if (cachedConnection.connection) {
            callback(null, cachedConnection.connection);
            return cachedConnection.connection;
        }

        if (!cachedConnection.promise) {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                bufferCommands: false,
            };

            cachedConnection.promise = mongoose.connect(uri, options).then((connection) => {
                return connection;
            }) as Promise<DBConnection>;

            mongoose.connect;
        }

        cachedConnection.connection = await cachedConnection.promise;
        callback(null, cachedConnection.connection);
        return cachedConnection.connection;
    } catch (e) {
        console.error(e);
        callback(e, null);
        return null;
    }
}
