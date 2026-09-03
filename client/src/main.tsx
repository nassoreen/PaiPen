import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, useRouter } from "@/app/router";
import { LandingPage } from "@/pages/landing";
import { AuthPage } from "@/pages/auth";
import "@/app/styles/global.css";

function EntryRoutes() {
  const { path } = useRouter();

  if (path === "/signin") {
    return <AuthPage />;
  }

  return <LandingPage />;
}

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("ไม่พบ element #app");
}

createRoot(appElement).render(
  <StrictMode>
    <RouterProvider>
      <EntryRoutes />
    </RouterProvider>
  </StrictMode>,
);