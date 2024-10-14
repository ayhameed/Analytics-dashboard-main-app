import { useMemo } from "react";
import { createAppTheme } from "@web-insight/component-library";
import { useApplicationTheme } from "@/common";

export const useDefaultTheme = () => {
  const { isDarkMode } = useApplicationTheme();

  return useMemo(
    () =>
      createAppTheme(
        {
          dashboard: {},
          userPage: {},
        },
        isDarkMode,
      ),
    [isDarkMode],
  );
};
