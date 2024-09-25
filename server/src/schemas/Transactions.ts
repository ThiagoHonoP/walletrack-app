import { model, Schema } from "mongoose";
import { ITransactions } from "../interfaces/ITransactions";

const TransactionSchema = new Schema({
  value: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "users" },
  created_at: { type: Date, required: true, default: Date.now() },
});

export default model<ITransactions>("transactions", TransactionSchema);
