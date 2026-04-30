import z from "zod";

export const createproductSchema = z.object({
  title: z
    .string({ error: "title should be a valid string" })
    .min(3, { error: "minimum 3 charchters is required" }),

  price: z
    .string()
    .optional()
    .transform((val) => Number(val))
    .default(0),

  description: z
    .string({ error: "description should be a valid string" })
    .min(10, { error: "minimum 10 characters is required" }),

  testimonials: z
    .array(
      z.object({
        name: z
          .string({ error: "name should be a valid sting" })
          .min(3, { error: "minimum 3 charchters is required" }),

        feedback: z
          .string({ error: "feedback should be a valid sting" })
          .min(10, { error: "minimum 10 charchters is required" }),
      }),
    )
    .optional(),
  features: z.array(z.string()).optional(),
});
