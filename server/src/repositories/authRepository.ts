import UserSchema from "../schemas/User";

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
  return idUser;
};

export default {
  create,
  findByEmail,
  generateToken,
};
