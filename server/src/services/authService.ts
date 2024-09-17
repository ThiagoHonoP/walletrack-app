import bcrypt from "bcrypt";
import { ISignupForm } from "../interfaces/IAuth";
import authRepository from "../repositories/authRepository";

const signup = async (body: ISignupForm) => {
  const hashPassword = bcrypt.hashSync(body.password, 10);

  const userExists = await authRepository.findByEmail(body.email);

  if (userExists) {
    throw new Error("User already exists");
  }

  return authRepository.create({ ...body, password: hashPassword });
};

export default {
  signup,
};
