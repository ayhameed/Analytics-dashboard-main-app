"use client";

import React, { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ServicesProvider } from "@/common/services";
import { EnvironmentProvider } from "@/common/config";
import { AppThemeProvider } from "@web-insight/component-library";
import { useDefaultTheme } from "@/ui/assets/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@web-insight/component-library/dist/style.css";
import "swiper/css";
import { ApplicationThemeProvider, AuthProvider, SearchProvider } from "@/ui/modules/partials";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ApplicationThemeProvider>
        <SearchProvider>
          <AuthProvider>
            <ThemeProvider>
              <EnvironmentProvider>
                <ServicesProvider>{children}</ServicesProvider>
              </EnvironmentProvider>
            </ThemeProvider>
          </AuthProvider>
        </SearchProvider>
      </ApplicationThemeProvider>
      <ToastContainer position="top-center" />
    </AppRouterCacheProvider>
  );
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultTheme = useDefaultTheme();
  // @ts-ignore
  return <AppThemeProvider theme={defaultTheme}>{children}</AppThemeProvider>;
};
