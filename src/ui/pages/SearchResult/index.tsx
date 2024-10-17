import { FilteredResult } from "./ui";
import { SearchProvider } from "../SearchContext";
import { Layout } from "@/ui/modules/partials";

export const SearchResult = () => {
    return(
        <Layout>
            <SearchProvider>
                <FilteredResult/>
            </SearchProvider>
        </Layout>
    )
}