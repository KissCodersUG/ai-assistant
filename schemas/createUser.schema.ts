import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /^[A-Za-z\d!@#$%^&*]{8,}$/,
      "Password must only contain letters, numbers, and (!@#$%^&*) special characters",
    )
    .regex(
      /[!@#$%^&*]/,
      "Password must contain at least one special character",
    ),
});
