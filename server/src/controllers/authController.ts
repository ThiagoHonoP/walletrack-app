import { Request, Response } from "express";

const signup = (req: Request, res: Response) => {
  res.send({
    body: req.body,
  });
};

export default { signup };
