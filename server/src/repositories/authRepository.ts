import UserSchema from "../schemas/User";
import jwt from "jsonwebtoken";
import "dotenv/config";
const create = async (data: any) => {
  return await UserSchema.create(data);
};

const findByEmail = async (email: string) => {
  const user = await UserSchema.findOne({
    email,
  });
  return user;
};

const generateToken = async (id: string) => {
  const idUser = id.toString();

  return jwt.sign({ idUser }, `${process.env.SECRET}`, { expiresIn: 86400 });
};

export default {
  create,
  findByEmail,
  generateToken,
};
