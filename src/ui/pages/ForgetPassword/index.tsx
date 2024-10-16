"use client";

import { AuthLayout } from "@/ui/modules/blocks";
import { ForgetPasswordForm } from "./ui/component";
import { Suspense } from "react";

export const ForgetPassword = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <ForgetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
};
