"use client";

import { PropsWithChildren, useContext } from "react";
import { Services, ServicesContext } from "@/common/services";

export const ServicesProvider = ({ children }: PropsWithChildren) => {
  return <ServicesContext.Provider value={{}}>{children}</ServicesContext.Provider>;
};

export const useServices = (): Services => {
  const services = useContext(ServicesContext);

  if (!services) {
    throw new Error("useServices must be used within a ServicesProvider");
  }

  return services;
};
