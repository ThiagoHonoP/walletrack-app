import { Document } from "mongoose";

export interface ISignupForm extends Document {
  name: string;
  email: string;
  password: string;
}
