import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const signup = async (data: any) => {
  console.log(data);
  const response = await axios.post(`${BASE_URL}/signup`, data);
  return response.data;
};

export const signin = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/signin`, data);
  return response.data;
};
