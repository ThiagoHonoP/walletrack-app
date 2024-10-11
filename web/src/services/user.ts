import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3001";

export const signup = async (data: any) => {
  delete data.confirmPassword;
  const response = await axios.post(`${BASE_URL}/signup`, data);
  return response.data;
};

export const signin = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/signin`, data);
  return response.data;
};

export const userLoged = async () => {
  const response = await axios.get(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response.data;
};
