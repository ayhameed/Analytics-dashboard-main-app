"use client";

import { PropsWithChildren, useContext, useState } from "react";
import { Environment, EnvironmentContext } from "@/common/config/environment/types";

export const EnvironmentProvider = ({ children }: PropsWithChildren) => {
  const [environment, setEnvironment] = useState<Environment>({
    baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL as string,
  });

  return <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>;
};

export const useEnvironment = (): Environment => {
  const environment = useContext(EnvironmentContext);

  if (!environment) {
    throw new Error("useEnvironment must be used within an EnvironmentProvider");
  }

  return environment;
};
