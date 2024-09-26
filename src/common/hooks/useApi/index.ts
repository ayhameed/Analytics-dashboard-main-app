import { ApiService, useEnvironment } from "@/common";
import { useMemo } from "react";

export const useApi = () => {
  const { baseApiUrl } = useEnvironment();

  return useMemo(() => {
    return new ApiService(baseApiUrl);
  }, [baseApiUrl]);
};
