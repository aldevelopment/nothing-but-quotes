import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import logger from "../middleware/logger";

export default nc({
    onError: (err, _req: NextApiRequest, res: NextApiResponse, _next) => {
        console.error(err.stack);
        res.status(500).end();
    },
    onNoMatch: (_req, res) => {
        res.status(404).end("Page not found");
    },
}).use(logger);

export function errorHandler(res: NextApiResponse, err: any) {
    res.status(500).json({
        message: "API Error",
        error: err.toString(),
    });
}
