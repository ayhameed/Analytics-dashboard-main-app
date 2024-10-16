"use client";

import { AuthLayout } from "@/ui/modules/blocks";
import { LoginForm } from "@/ui/pages/Login/ui/components";
import { Suspense } from "react";

export const Login = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
};
