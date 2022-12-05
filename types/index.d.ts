import type { Document, Connection, ObjectId } from "mongoose";

declare global {
    let dbConnection: CachedDBConnection;

    type DBConnection = Connection | null;
    type QuoteCategory = "humor" | "all";

    interface CachedDBConnection {
        connection: DBConnection;
        promise: Promise<DBConnection> | null;
    }

    interface Quote extends Document {
        _id: ObjectId;
        text: string;
        author: string;
        category: QuoteCategory;
        submittedAt: Date;
        updatedAt: Date;
    }

    interface QuoteProposal {
        text: string;
        author: string;
        category: string;
    }

    interface QuoteUpdateProposal {
        id: ObjectId;
        text?: string;
        author?: string;
        category?: string;
    }
}
