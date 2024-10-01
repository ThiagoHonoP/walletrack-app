import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({
      message: "Token invalid",
    });
  }

  const parts = authorization.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({
      message: "Token invalid",
    });
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    return res.status(401).send({
      message: "Token invalid",
    });
  }

  jwt.verify(
    token,
    process.env.SECRET as string,
    async (error, decoded: any) => {
      // console.log(decoded);

      if (error)
        return res.status(401).send({
          message: "Token invalid",
        });
      if (!decoded)
        return res.status(401).send({
          message: "Token invalid",
        });

      const user = await authRepository.findById(decoded.idUser);

      if (!user) return res.status(401).send({ message: "Invalid token" });

      res.locals.user = user;

      next();
    }
  );
};
