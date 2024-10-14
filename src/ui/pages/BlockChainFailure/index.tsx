"use client";

import { BlockSearchFailure } from "./ui/component";
import { Layout } from "@/ui/modules/partials";
import { BlockchainCurrencies } from "../Blockchain/ui/components";

export const BlockchainFailure = () => {
  return (
    <Layout>
      <BlockSearchFailure />
      <BlockchainCurrencies />
    </Layout>
  );
};
