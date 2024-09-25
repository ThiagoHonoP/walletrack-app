import { Document } from "mongoose";

export interface ITransactions extends Document {
  value: number;
  description: string;
  type: string;
  userId: string;
  created_at: Date;
}
