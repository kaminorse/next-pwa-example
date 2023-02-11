import AppConfig from '@/configurations/app.config';
import { AxiosRequestConfig } from "axios";

const AxiosConfig = <D>(
  config?: AxiosRequestConfig<D>
): AxiosRequestConfig<D> => {
  const baseConfig: AxiosRequestConfig<D> = {
    timeout: 10000,
    baseURL: AppConfig.BASE_URL,
    responseType: "json",
  };
  if (!config) {
    return baseConfig;
  }
  return {
    ...baseConfig,
    ...config,
  };
};

export default AxiosConfig;
