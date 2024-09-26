"use client";

import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ServicesProvider } from "@/common/services";
import { EnvironmentProvider } from "@/common/config";
import { AppThemeProvider } from "@web-insight/component-library";
import { defaultTheme } from "@/ui/assets/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@web-insight/component-library/dist/style.css";
import "swiper/css";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <AppThemeProvider theme={defaultTheme}>
        <EnvironmentProvider>
          <ServicesProvider>{children}</ServicesProvider>
        </EnvironmentProvider>
      </AppThemeProvider>
      <ToastContainer position={"top-center"} />
    </AppRouterCacheProvider>
  );
};
