declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URI: string;
      USERNAME: string;
      PASSWORD: string;
    }
  }
}
