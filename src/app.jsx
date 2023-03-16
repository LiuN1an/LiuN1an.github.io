import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Resume } from "./pages/resume";

export const App = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(["dark"]);
    } else {
      document.documentElement.classList.remove(["dark"]);
    }
  }, [isDark]);

  return (
    <>
      <div
        className="absolute right-0 top-0 p-2 bg-red z-10"
        onClick={() => {
          setDark((d) => !d);
        }}
      >
        {isDark ? <>dark</> : <>light</>}
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/resume" />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};
