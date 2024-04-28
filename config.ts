import "dotenv/config";

export const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}`;
export const AUTH_SECRET = process.env.REST_API_SECRET;
