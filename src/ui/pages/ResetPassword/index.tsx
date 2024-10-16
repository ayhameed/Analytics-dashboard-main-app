"use client";

import { AuthLayout } from "@/ui/modules/blocks";
import { ResetPasswordForm } from "./ui/component";
import { Suspense } from "react";

export const ResetPassword = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
};
