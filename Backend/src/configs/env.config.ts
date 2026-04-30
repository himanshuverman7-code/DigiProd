import "dotenv/config";
import z from "zod";

const required = () => {
  return z.string().min(1);
};

const envSchema = z.object({
  PORT: required(),
  NODE_ENV: required(),
  MONGO_URI: required(),
  TOKEN_SECRET: required(),
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
