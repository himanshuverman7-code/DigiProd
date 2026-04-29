  declare namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: "production" | "development" | "test";
      MONGO_URI: string;
    }
  }
