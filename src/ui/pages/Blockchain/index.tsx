import { Layout } from "@/ui/modules/partials";
import { BlockchainSearch } from "./ui/components";
import { BlockchainCurrencies } from "./ui/components";

export const Blockchain = () => {
  return <Layout>
    <BlockchainSearch/>
    <BlockchainCurrencies/>
  </Layout>;
};