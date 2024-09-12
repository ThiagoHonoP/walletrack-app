import express, { json } from "express";
import "dotenv/config";
import { connectDb } from "./config/database";
import authRouter from "./routes/authRoutes";

const port = process.env.PORT || 3000;
const app = express();
connectDb();
app.use(json());
app.use(authRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
