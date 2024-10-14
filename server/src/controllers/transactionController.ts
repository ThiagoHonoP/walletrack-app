import { Request, Response } from "express";
import TransactionSchema from "../schemas/Transactions";

import transactionService from "../services/transactionService";

const create = async (req: Request, res: Response) => {
  const { _id: idUser } = res.locals.user;
  const id = idUser.toString();

  const body = req.body;

  try {
    const transaction = await transactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (error) {
    return res.status(409).send(error);
  }
};

const findAllByUser = async (req: Request, res: Response) => {
  const { _id: idUser } = res.locals.user;

  try {
    const transactions = await transactionService.findAllByUser(idUser);
    return res.status(200).send(transactions);
  } catch {
    return res.status(404).send("Transactions not found");
  }
};

const findById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaction = await transactionService.findById(id);
    return res.status(200).send(transaction);
  } catch (error) {
    return res.status(404).send("Transaction not found");
  }
};

export default { create, findAllByUser, findById };
