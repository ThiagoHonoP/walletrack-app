import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(3, "Name must be at least 3 characters long"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
