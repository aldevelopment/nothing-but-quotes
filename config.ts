import dotenv from 'dotenv-safe'

export default function config() {
    dotenv.config({
        example: './.env.example'
    })

    return {
        MONGO_USERNAME: process.env.MONGO_USERNAME || "alex",
        MONGO_PASSWORD: process.env.MONGO_PASSWORD || "password",
        MONGO_METHOD: process.env.MONGO_METHOD || "mongodb",
        MONGO_HOST: process.env.MONGO_HOST || "localhost",
        MONGO_PARAMS: process.env.MONGO_PARAMS || "",
    }
}
