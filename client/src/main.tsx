import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthPage } from "@/pages/auth";
import "@/app/styles/global.css";

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("ไม่พบ element #app");
}

createRoot(appElement).render(
  <StrictMode>
    <AuthPage />
  </StrictMode>,
);