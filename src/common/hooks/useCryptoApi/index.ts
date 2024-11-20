import { ApiResponse, ApiTopTokenData, getAccessToken, tryExecute, useApi } from "@/common";
import { toast } from "react-toastify";

interface TokenDetailsData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  tvl: number;
  market_cap: number;
  fdv: string;
  volume_24h: number;
  circulating_supply: number;
  total_supply: number;
  address: string;
  price: number;
  slug: string;
  asset_type: string;
}

interface TokenHolder {
  address: string;
  amount_held: number;
  percentage_of_supply: number;
}

interface SolanaMetrics {
  validators: number;
  daily_active_programs: number | null;
  total_non_vote_fees: number | null;
  tps: number | null;
}

export const useCryptoApi = () => {
  const api = useApi();

  const getTokenDetails = async (id: number): Promise<TokenDetailsData | null> => {
    return tryExecute(
      () => api.get<ApiResponse<TokenDetailsData>>(`tokens/${id}`),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const getTopTokens = async (): Promise<ApiTopTokenData | null> => {
    return tryExecute(
      () => api.get<ApiResponse<ApiTopTokenData>>(`tokens/top-tokens`),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const searchToken = async (searchTerm: string): Promise<ApiTopTokenData | null> => {
    const token = getAccessToken();
    return tryExecute(
      () =>
        api.get<ApiResponse<ApiTopTokenData>>(`tokens/search?name=${searchTerm}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const getTokenHistory = async (
    id: number,
    timeSpan: string,
  ): Promise<Record<string, any> | null> => {
    return tryExecute(
      () => api.get<ApiResponse<Record<string, any>>>(`tokens/${id}/history?time_span=${timeSpan}`),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const getTokenFeeTracker = async (
    id: number,
    timeSpan: string,
  ): Promise<Record<string, any> | null> => {
    return tryExecute(
      () =>
        api.get<ApiResponse<Record<string, any>>>(`tokens/${id}/fee-tracker?time_span=${timeSpan}`),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const getSolanaMetrics = async (): Promise<SolanaMetrics | null> => {
    return tryExecute(
      () => api.get<ApiResponse<SolanaMetrics>>("solana/metrics"),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
      },
      async () => {
        toast.error("An error occurred");
        return null;
      },
    );
  };

  const getTokenHolders = async (id: number): Promise<TokenHolder[] | null> => {
    return tryExecute(
      () => api.get<ApiResponse<TokenHolder[]>>(`tokens/${id}/holders`),
      async (response) => {
        if (response.data.status_code === 200) {
          return response.data.data;
        }
        toast.error(response.data.message);
        return null;
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
    getTokenDetails,
    getTokenHistory,
    getTokenFeeTracker,
    getSolanaMetrics,
    getTokenHolders,
  };
};
