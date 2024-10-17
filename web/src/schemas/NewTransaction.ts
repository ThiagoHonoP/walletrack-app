import { z } from "zod";

export const transactionSchema = z.object({
  value: z
    .string()
    .min(1, "Value is required")
    .transform((value) => Number(value)),
  description: z.string().min(3, "Description is required"),
});
