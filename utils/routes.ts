import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

export default nc({
    onError: (err, _req: NextApiRequest, res: NextApiResponse, _next) => {
        console.error(err.stack);
        res.status(500).end("Error: ", err);
    },
    onNoMatch: (_req, res) => {
        res.status(404).end("Page not found");
    },
});

export function errorHandler(res: NextApiResponse, err: any) {
    res.status(500).json({
        message: "API Error",
        error: err,
    });
}
