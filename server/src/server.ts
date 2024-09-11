import express from "express";
import "dotenv/config";
import { connectDb } from "./config/database";

const app = express();
connectDb();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
