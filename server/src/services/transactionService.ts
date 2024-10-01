import transactionRepository from "../repositories/transactionRepository";

const create = async (body: any, id: string) => {
  if (!id) {
    throw new Error("id not found");
  }

  return await transactionRepository.create({ ...body, userId: id });
};

const findAllByUser = async (id: string) => {
  if (!id) {
    return [];
  }
  return await transactionRepository.findAllByUser(id);
};

export default {
  create,
  findAllByUser,
};
