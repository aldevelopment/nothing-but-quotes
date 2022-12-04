import handler, { errorHandler } from "../../utils/routes";
import connectToDB from "../../lib/dbConnect";
import { getAllQuotes } from "../../models/quote";

handler.get(async (_req, res) => {
    try {
        await connectToDB((err, connection) => {
            if (err || !connection) {
                errorHandler(res, err);
            }
        });

        const quotes = await getAllQuotes();

        res.status(200).json({
            message: "Success",
            data: quotes,
        });
    } catch (e) {
        errorHandler(res, e);
    }
});

export default handler;
