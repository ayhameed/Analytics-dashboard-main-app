import { ApiResponse, ApiTopTokenData, tryExecute, useApi } from "@/common";
import { toast } from "react-toastify";

export const useCryptoApi = () => {
  const api = useApi();

  const getTopTokens = async (): Promise<ApiTopTokenData | null> => {
    return tryExecute(
      () => api.get<ApiResponse<ApiTopTokenData>>(`tokens/top-tokens`),
      async (response) => {
        const responseData = response.data;

        if (responseData.status_code === 200) {
          console.log(responseData.data);
          return responseData.data;
        } else {
          toast.error(responseData.message);
          return null;
        }
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const searchToken = async (searchTerm: string): Promise<ApiTopTokenData | null> => {
    return tryExecute(
      () => api.get<ApiResponse<ApiTopTokenData>>(`tokens/search?name=${searchTerm}`),
      async (response) => {
        const responseData = response.data;

        if (responseData.status_code === 200) {
          return responseData.data;
        } else {
          toast.error(responseData.message);
          return null;
        }
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  return {
    getTopTokens,
    searchToken,
  };
};
