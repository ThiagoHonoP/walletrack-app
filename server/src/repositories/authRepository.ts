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

const findById = async (id: string) => {
  const userId = await UserSchema.findById(id);
  return userId;
};

const generateToken = async (id: string) => {
  const idUser = id.toString();

  return jwt.sign({ idUser }, `${process.env.SECRET}`, { expiresIn: 86400 });
};

export default {
  create,
  findByEmail,
  findById,
  generateToken,
};
