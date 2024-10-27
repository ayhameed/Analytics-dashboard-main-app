export type ApiBlockchainData = {
  id: string | number;
  name: string;
  symbol: string;
  logo: string;
  slug: string;
  circulating_supply: number;
  total_supply: number;
  token_address: string;
  price: number;
  volume_24h: number;
  tvl: string | number | null;
  fdv: string;
  market_cap: number;
};

export type ApiTopTokenData = {
  data: ApiBlockchainData[];
};
