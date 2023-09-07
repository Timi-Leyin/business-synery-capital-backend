declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    MONGODB_URI: string;
    // Add more environment variables here
  }
}
