"use client";
import { Box, Button, useTheme } from "@mui/material";
import useThemeToggle from "@/hooks/useThemeToggle";
import { useCallback } from "react";

const Home = function () {
  const { modeToggle, toggleColor } = useThemeToggle();
  const theme = useTheme();

  const handleToggle = () => {
    modeToggle();
    toggleColor();
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Button onClick={handleToggle}>Click Me!</Button>
    </Box>
  );
};

export default Home;
