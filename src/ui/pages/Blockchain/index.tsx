"use client";

import { Layout } from "@/ui/modules/partials";
import { BlockchainCurrencies, BlockchainSearch } from "./ui/components";

export const Blockchain = () => {
  return (
    <Layout>
      <BlockchainSearch />
      <BlockchainCurrencies />
    </Layout>
  );
};
