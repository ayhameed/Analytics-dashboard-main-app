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

export interface Country {
  country_name: string;
  visitor_count: number;
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

  const getTopTokens = async (type: string): Promise<ApiTopTokenData | null> => {
    return tryExecute(
      () => api.get<ApiResponse<ApiTopTokenData>>(`tokens/top-tokens?asset_type=${type}`),
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

  const getTopCountries = async (): Promise<Country[]> => {
    return tryExecute(
      () => api.get<ApiResponse<any>>("admin/dashboard/visitor-geography"),
      async (response) => {
        if (response.data.status_code === 200) {
          const ret = response.data.data;
          return ret.countries;
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

  const exportCountryData = async (timeRange: string): Promise<void> => {
    return tryExecute(
      () =>
        api.get(`admin/dashboard/export?time_range=${timeRange}`, {
          responseType: "blob", // Explicitly set response type to 'blob'
        }),
      async (response) => {
        if (response.status === 200) {
          const blob = response.data as Blob; // Explicitly cast response.data to Blob
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `export_${timeRange}.csv`); // Name the downloaded file
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          toast.success("Download started");
        } else {
          toast.error("Failed to start download");
        }
      },
      async () => {
        toast.error("An error occurred during export");
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
    getTopCountries,
    exportCountryData,
  };
};
