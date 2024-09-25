import transactionRepository from "../repositories/transactionRepository";

const create = async (body: any, id: string) => {
  if (!id) {
    throw new Error("id not found");
  }

  return await transactionRepository.create({ ...body, userId: id });
};

export default {
  create,
};
