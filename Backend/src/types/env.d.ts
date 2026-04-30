declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: string;
    readonly NODE_ENV: "production" | "development" | "test";
    readonly MONGO_URI: string;
    readonly TOKEN_SECRET: string;
  }
}
