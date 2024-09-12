import bcrypt from "bcrypt";
import { ISignupForm } from "../interfaces/IAuth";
import authRepository from "../repositories/authRepository";

const signup = (body: ISignupForm) => {
  const hashPassword = bcrypt.hashSync(body.password, 10);

  return authRepository.create({ ...body, password: hashPassword });
};

export default {
  signup,
};
