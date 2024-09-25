import TransactionSchema from "../schemas/Transactions";

const create = async (data: any) => {
  return await TransactionSchema.create(data);
};

export default {
  create,
};
