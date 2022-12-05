import type { NextApiRequest, NextApiResponse } from "next";
import onFinished from "on-finished";
import chalk from "chalk";

export default (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    const log = () => {
        const method = req.method;
        let methodString = chalk.gray(method);
        if (method === "GET") {
            methodString = chalk.green(method);
        } else if (method === "POST") {
            methodString = chalk.blue(method);
        } else if (method === "PUT") {
            methodString = chalk.yellow(method);
        } else if (method === "DELETE") {
            methodString = chalk.red(method);
        }
        const urlString = req.url;
        let statusString = res.statusCode + "";
        if (statusString.at(0) === "2") {
            statusString = chalk.green(statusString + ' ' + res.statusMessage);
        } else if (statusString.at(0) === '3') {
            statusString = chalk.blue(statusString + ' ' + res.statusMessage);
        } else if (statusString.at(0) === '4') {
            statusString = chalk.yellow(statusString + ' ' + res.statusMessage);
        } else if (statusString.at(0) === '5') {
            statusString = chalk.red(statusString + ' ' + res.statusMessage);
        } else {
            statusString = chalk.gray(statusString + ' ' + res.statusMessage);
        }
        console.log(methodString, urlString, statusString);
    };

    onFinished(res, log);
    next();
};
