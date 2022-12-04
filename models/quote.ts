import mongoose from "mongoose";

const QuoteSchema: mongoose.Schema = new mongoose.Schema({
    text: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    submittedAt: {
        type: mongoose.Schema.Types.Date,
        default: new Date(),
    },
});

const Quote = mongoose.models.Quote ?? mongoose.model<Quote>("Quote", QuoteSchema);

export default Quote;

export async function getQuotes(): Promise<Quote[]> {
    try {
        const quotes = await Quote.find();

        if (!quotes) {
            throw new Error("failed to get quotes");
        }

        return quotes;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getQuote(): Promise<Quote | null> {
    try {
        const quote = await Quote.findOne()
            .populate("text")
            .populate("author")
            .populate("category")
            .populate("submittedAt");

        if (!quote) {
            throw new Error("failed to get quote");
        }

        return quote;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function getQuoteById(id: string): Promise<Quote | null> {
    try {
        const quote = await Quote.findById(id)
            .populate("text")
            .populate("author")
            .populate("category")
            .populate("submittedAt");

        if (!quote) {
            throw new Error("failed to get quote by ID");
        }

        return quote;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function getQuotesByCategory(category: string): Promise<Quote[]> {
    try {
        const quotes = await Quote.find({ category });

        if (!quotes) {
            throw new Error("failed to get quotes by category");
        }

        return quotes;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getQuoteByCategory(category: string): Promise<Quote | null> {
    try {
        const quote = await Quote.findOne({ category })
            .populate("text")
            .populate("author")
            .populate("category")
            .populate("submittedAt");

        if (!quote) {
            throw new Error("failed to get quote by category");
        }

        return quote;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function getQuotesByAuthor(author: string): Promise<Quote[]> {
    try {
        const quotes = await Quote.find({ author });

        if (!quotes) {
            throw new Error("failed to get quotes by author");
        }

        return quotes;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getQuoteByAuthor(author: string): Promise<Quote | null> {
    try {
        const quote = await Quote.findOne({ author })
            .populate("text")
            .populate("author")
            .populate("category")
            .populate("submittedAt");

        if (!quote) {
            throw new Error("failed to get quote by author");
        }

        return quote;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function getQuotesSubmittedAt(submittedAt: Date): Promise<Quote[]> {
    try {
        const quotes = await Quote.find({ submittedAt });

        if (!quotes) {
            throw new Error("failed to get quotes submitted at");
        }

        return quotes;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getQuoteSubmittedAt(submittedAt: Date): Promise<Quote | null> {
    try {
        const quote = await Quote.findOne({ submittedAt })
            .populate("text")
            .populate("author")
            .populate("category")
            .populate("submittedAt");

        if (!quote) {
            throw new Error("failed to get quote by submittedAt");
        }

        return quote;
    } catch (e) {
        console.error(e);
        return null;
    }
}
