import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Resume } from "./pages/resume";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/resume" />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};
