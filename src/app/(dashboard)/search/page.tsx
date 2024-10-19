import { SearchResult } from "@/ui/pages";
import React, { Suspense } from "react";

export default function searchResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResult />
    </Suspense>
  );
}
