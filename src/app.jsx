import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useRouteError,
  useRoutes,
  useNavigate,
} from "react-router-dom";
import { IconButton, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Resume } from "./pages/resume";
import { Resume as ResumeZh } from "./pages/resume_zh";

export const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const { toggleColorMode, colorMode } = useColorMode();
  const navigate = useNavigate();

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
      <div className="fixed right-5 top-0 p-2 z-10 transition-all duration-300 max-sm:top-1/2 max-sm:-right-2 max-sm:-translate-y-1/2 flex flex-col gap-3">
        <IconButton
          className="backdrop-blur-sm"
          variant="solid"
          rounded="full"
          size="lg"
          onClick={() => {
            if (window.location.hash.endsWith("zh")) {
              navigate("/resume");
            } else {
              navigate("/resume_zh");
            }
          }}
        >
          {window.location.hash.endsWith("zh") ? (
            <span className="font-bold">EN</span>
          ) : (
            <span>中</span>
          )}
        </IconButton>
        <IconButton
          className="backdrop-blur-sm"
          variant="solid"
          rounded="full"
          size="lg"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/resume" />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume_zh" element={<ResumeZh />} />
      </Routes>
    </>
  );
};
