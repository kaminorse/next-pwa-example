const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? "https://kaminorse.github.io/next-pwa-example"
    : "http://localhost:3000";

const AppConfig = {
  BASE_URL,
};

export default AppConfig;
