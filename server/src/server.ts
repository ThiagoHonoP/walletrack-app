import express, { json } from "express";
import "dotenv/config";
import { connectDb } from "./config/database";
import authRouter from "./routes/authRoutes";
import transactionRouter from "./routes/transactionRoutes";

const port = process.env.PORT || 3000;

const app = express();
connectDb();
app.use(json());
app.use(authRouter);
app.use(transactionRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
