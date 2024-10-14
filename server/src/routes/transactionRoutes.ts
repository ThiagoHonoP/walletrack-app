import { Router } from "express";
import transactionController from "../controllers/transactionController";
import { authMiddleware } from "../middlewares/authMiddleware";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post("/transactions", transactionController.create);

transactionRouter.get("/transactions", transactionController.findAllByUser);

transactionRouter.get("/transactions/:id", transactionController.findById);

export default transactionRouter;
