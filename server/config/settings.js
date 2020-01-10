/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}${process.env.MONGO_DB}`;
