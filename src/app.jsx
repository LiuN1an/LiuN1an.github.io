import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Resume } from "./pages/resume";

export const App = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      document.documentElement.classList.remove(["dark"]);
      document.documentElement.setAttribute("data-theme", "");
    } else {
      document.documentElement.classList.add(["dark"]);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [colorMode]);

  return (
    <>
      <div
        className="fixed right-5 top-0 p-2 bg-red z-10"
        onClick={toggleColorMode}
      >
        <IconButton
          variant="solid"
          aria-label="toggle theme"
          rounded="full"
          size="sm"
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
