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
import { FaMoon, FaSun, FaFileExport } from "react-icons/fa";
import { Resume } from "./pages/resume";
import { Resume as ResumeZh } from "./pages/resume_zh";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const onFileExportClick = async () => {
    let lang = "en";
    if (window.location.hash.endsWith("zh")) {
      lang = "zh";
    }
    const root = document.getElementById(`save_to_pdf_id_${lang}`);
    const name = document.getElementById(`${lang}_name`);
    const prevTop = name.style.marginTop;
    name.style.marginTop = "0px";
    const contact = document.getElementById(`person_contact_${lang}`);
    contact.style.display = "flex";
    const move = document.getElementById(`move_please_${lang}`);
    move.style.display = "flex";
    const canvases = await html2canvas(root, {
      scale: isMobile ? 3 : 2,
    });
    contact.style.display = "none";
    move.style.display = "none";
    name.style.marginTop = prevTop;
    const durl = canvases.toDataURL("image/png");
    const content = document.getElementById(`save_to_pdf_content_${lang}`);
    const radio = content.clientHeight / content.clientWidth;
    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      compress: true,
    });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = pdfWidth * radio;
    const totalPages = Math.ceil(imgHeight / pdfHeight);

    for (let page = 0; page < totalPages; page++) {
      if (page > 0) {
        pdf.addPage();
      }

      pdf.setFillColor(colorMode === "light" ? "#ffffff" : "#101827");
      pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
      const offsetTop = page * pdfHeight;

      pdf.addImage({
        imageData: durl,
        format: "PNG",
        x: 0,
        y: -offsetTop,
        width: pdfWidth,
        height: imgHeight,
      });
    }

    window.open(pdf.output("bloburl", { filename: "new-file.pdf" }), "_blank");
  };

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
        <IconButton
          className="backdrop-blur-sm"
          variant="solid"
          rounded="full"
          size="lg"
          onClick={onFileExportClick}
        >
          <FaFileExport />
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
