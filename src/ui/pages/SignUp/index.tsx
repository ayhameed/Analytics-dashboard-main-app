"use client";

import { AuthLayout } from "@/ui/modules/blocks";
import { SignUpForm } from "@/ui/pages/SignUp/ui/components";
import { Suspense } from "react";

export const SignUp = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpForm />
      </Suspense>
    </AuthLayout>
  );
};
