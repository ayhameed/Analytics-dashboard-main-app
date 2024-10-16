import React, { Suspense } from "react";
import { EmailSuccess } from "@/ui/pages";

export default function EmailSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailSuccess />
    </Suspense>
  );
}
