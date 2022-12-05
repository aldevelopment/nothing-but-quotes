import handler, { errorHandler } from "../../utils/routes";
import connectToDB from "../../lib/dbConnect";
import * as Quote from "../../models/quote";

handler.get(async (_req, res) => {
    try {
        await connectToDB((err, connection) => {
            if (err || !connection) {
                errorHandler(res, err);
            }
        });

        const quotes = await Quote.getQuotes();

        res.status(200).json({
            message: "Success",
            data: quotes,
        });
    } catch (e) {
        errorHandler(res, e);
    }
});

handler.post(async (req, res) => {
    try {
        await connectToDB((err, connection) => {
            if (err || !connection) {
                errorHandler(res, err);
            }
        });

        const response = await Quote.createQuote(req.body);

        if (response.error) {
            errorHandler(res, response.error);
        }

        res.status(200).json({
            message: "Success",
            data: response.quote,
        });
    } catch (e) {
        errorHandler(res, e);
    }
});

handler.put(async (req, res) => {
    try {
        await connectToDB((err, connection) => {
            if (err || !connection) {
                errorHandler(res, err);
            }
        });

        const response = await Quote.updateQuote(req.body);

        if (response.error) {
            errorHandler(res, response.error);
        }

        res.status(200).json({
            message: "Success",
            data: response.quote,
        });
    } catch (e) {
        errorHandler(res, e);
    }
});

handler.delete(async (req, res) => {
    try {
        await connectToDB((err, connection) => {
            if (err || !connection) {
                errorHandler(res, err);
            }
        });

        const response = await Quote.deleteQuote(req.body.id);

        if (response.error) {
            errorHandler(res, response.error);
        }

        res.status(200).json({
            message: "Success",
            data: response.quote,
        });
    } catch (e) {
        errorHandler(res, e);
    }
})

export default handler;

export const config = {
    api: {
        bodyParse: false,
    },
};
