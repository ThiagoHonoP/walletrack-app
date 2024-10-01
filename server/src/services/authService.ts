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

const signin = async (body: any) => {
  const userVerify = await authRepository.findByEmail(body.email);

  if (!userVerify) {
    return new Error("email or password invalid");
  }

  const passVerify = bcrypt.compareSync(body.password, userVerify!.password);
  if (!passVerify) {
    return new Error("email or password invalid");
  }

  return authRepository.generateToken(userVerify?._id as string);
};

const userLogged = async (id: string) => {
  const user = await authRepository.findById(id);
  if (!user) throw new Error("User not found");

  return user;
};

export default {
  signup,
  signin,
  userLogged,
};
