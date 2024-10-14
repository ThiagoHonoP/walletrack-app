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
