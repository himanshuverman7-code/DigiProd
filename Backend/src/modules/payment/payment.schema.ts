import z from "zod";

export const paymentSchema = z.object({
  name: z
    .string({ error: "Name must be a valid string" })
    .min(3, { error: "Minimum 3 characters are required" })
    .max(30, { error: "Maximum 30 words are required" }),

  email: z
    .email({ error: "Must be a valid email" })
    .min(1, { error: "email is required" }),

  phone: z
    .string({ error: "Phone must be vailid numer" })
    .length(10, { error: "Only 10 digits is allowed" })
    .regex(/^\d+$/, "Phone number must contain only digits")
    .transform((val) => Number(val)),

  productId: z.string(),
});
