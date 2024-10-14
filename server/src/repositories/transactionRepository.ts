import TransactionSchema from "../schemas/Transactions";

const create = async (data: any) => {
  return await TransactionSchema.create(data);
};

const findAllByUser = async (id: string) => {
  console.log(id);
  return await TransactionSchema.find({ userId: id });
};

const findById = async (id: string) => {
  return await TransactionSchema.findById(id);
};

export default {
  create,
  findAllByUser,
  findById,
};
