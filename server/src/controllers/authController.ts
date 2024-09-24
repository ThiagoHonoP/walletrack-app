import { Request, Response } from "express";
import authService from "../services/authService";

const signup = (req: Request, res: Response) => {
  const body = req.body;

  try {
    const resService = authService.signup(body);
    return res.status(200).send(resService);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const signin = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const token = await authService.signin(body);
    return res.status(200).send(token);
  } catch (error) {
    return res.status(401).send("email or password invalid");
  }
};

export default { signup, signin };
