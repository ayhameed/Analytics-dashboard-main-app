import { useContext } from "react";
import { SearchContext, SearchContextProps } from "@/ui/modules/partials";

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within an SearchProvider");
  }
  return context;
};
