"use client";
import { Box, Button } from "@mui/material";
import useThemeToggle from "@/hooks/useThemeToggle";

const Home = function () {
  const { modeToggle, toggleColor } = useThemeToggle();

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
