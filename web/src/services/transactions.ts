import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3001";
export const getTransactions = async () => {
  const response = await axios.get(`${BASE_URL}/transactions`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response.data;
};

export const createTransaction = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/transactions`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
};

export const getTransactionById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/transactions/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response.data;
};
