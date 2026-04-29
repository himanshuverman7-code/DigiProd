import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  PORT: z.string().min(1),
  NODE_ENV: z.string().min(1),
  MONGO_URI: z.string().min(1),
});

const env = envSchema.safeParse(process.env);

const error = env.error?.issues.map((err) => {
  return err.path.join();
});

if (!env.success) {
  console.log(error);
  throw new Error("Enviornmental Variable is Missing");
}

export const config = env.data;
