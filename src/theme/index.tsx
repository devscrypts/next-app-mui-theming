"use client";
import { PropsWithChildren, useMemo } from "react";
import breakpoints from "@/theme/breakpoints";
import typography from "@/theme/typography";
import { darkModePalette, lightModePalette } from "@/theme/palette";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import useThemeToggle from "@/hooks/useThemeToggle";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const ThemeRegistry = function ({ children }: PropsWithChildren) {
  const { lightMode, currentColor } = useThemeToggle();

  const themeOptions = useMemo(
    () => ({
      breakpoints,
      typography,
      palette: lightMode
        ? { ...lightModePalette, primary: currentColor }
        : { ...darkModePalette, primary: currentColor },
    }),
    [lightMode, currentColor],
  );

  const theme = createTheme(themeOptions);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegistry;
