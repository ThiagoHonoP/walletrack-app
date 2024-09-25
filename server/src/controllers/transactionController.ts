import { Request, Response } from "express";
import TransactionSchema from "../schemas/Transactions";

import transactionService from "../services/transactionService";

const create = async (req: Request, res: Response) => {
  const id = "";
  const body = req.body;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (error) {
    return res.status(409).send(error);
  }
};

export default { create };
