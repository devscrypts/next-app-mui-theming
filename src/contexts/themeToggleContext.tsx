"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

interface IThemeToggleContext {
  lightMode: boolean;
  modeToggle: () => void;
  currentColor: Record<string, string>;
  toggleColor: () => void;
}

const initialState = {
  lightMode: false,
  modeToggle: () => null,
  currentColor: {},
  toggleColor: () => null,
};
const ThemeToggleContext = createContext<IThemeToggleContext>(initialState);

const initialColor = {
  light: "#3FC79A",
  main: "#209F0C",
  dark: "#0B815A",
};

const ThemeToggleProvider = function ({ children }: PropsWithChildren) {
  const [lightMode, setLightMode] = useState(false);

  const [currentColor, setCurrentColor] = useState(initialColor);

  const modeToggle = useCallback(() => setLightMode((prev) => !prev), []);

  const toggleColor = useCallback(
    () =>
      setCurrentColor((prev) =>
        prev.main === "#209F0C"
          ? {
              light: "#F4EBFF",
              main: "#9747FF",
              dark: "#5909C2",
            }
          : initialColor,
      ),
    [initialColor],
  );

  const value = useMemo(
    () => ({
      lightMode,
      modeToggle,
      currentColor,
      toggleColor,
    }),
    [lightMode, modeToggle, currentColor, toggleColor],
  );

  return (
    <ThemeToggleContext.Provider value={value}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export { ThemeToggleProvider };
export default ThemeToggleContext;
