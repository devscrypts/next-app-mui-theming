import { useContext } from "react";
import ThemeToggleContext from "@/contexts/themeToggleContext";

const useThemeToggle = () => useContext(ThemeToggleContext);

export default useThemeToggle;
