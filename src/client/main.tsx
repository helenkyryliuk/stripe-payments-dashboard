import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import { OnlinePaymentForm } from "./OnlinePaymentForm.tsx";
import { CompletePage } from "./CompletePage.tsx";
import { CreatePaymentPage } from "./CreatePaymentPage.tsx";
import { OnlinePaymentCard } from "./OnlinePaymentCard.tsx";
import { AnalyticsPage } from "./AnalyticsPage.tsx";
import { PublicPaymentPage } from "./payment/PublicPaymentPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnlinePaymentCard />,
  },
  {
    path: "/create-payment",
    element: <CreatePaymentPage />,
  },
  {
    path: "/pay/:slug",
    element: <PublicPaymentPage />,
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />,
  },
  {
    path: "/complete",
    element: <CompletePage />,
  },
  // {
  //   path: "*", // Catch-all route for 404 pages
  //   element: <NotFound />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AnalyticsPage />
  </React.StrictMode>,
);
