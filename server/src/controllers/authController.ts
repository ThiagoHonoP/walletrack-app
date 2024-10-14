import { Request, Response } from "express";
import authService from "../services/authService";

const signup = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const resService = await authService.signup(body);
    return res.status(200).send(resService);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const signin = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const token = await authService.signin(body);
    if (JSON.stringify(token) === "{}")
      return res.status(401).send("email or password invalid...");
    return res.status(200).send(token);
  } catch (error) {
    return res.status(401).send("email or password invalid");
  }
};

const userLogged = async (req: Request, res: Response) => {
  const { _id: idUser } = res.locals.user;

  try {
    const user = await authService.userLogged(idUser);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(404).send("User not found");
  }
};

export default { signup, signin, userLogged };
