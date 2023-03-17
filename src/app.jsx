import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { IconButton, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Resume } from "./pages/resume";

export const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const { toggleColorMode, colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      document.documentElement.classList.remove(["dark"]);
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.classList.add(["dark"]);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [colorMode]);

  return (
    <>
      <div
        className="fixed right-5 top-0 p-2 z-10 transition-all duration-300 max-sm:top-1/2 max-sm:-right-2 max-sm:-translate-y-1/2"
        onClick={toggleColorMode}
      >
        <IconButton
          className="backdrop-blur-sm"
          variant="solid"
          rounded="full"
          size="lg"
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/resume" />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};
