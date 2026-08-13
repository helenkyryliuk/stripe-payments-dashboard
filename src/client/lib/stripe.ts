import { loadStripe } from "@stripe/stripe-js";
import type { Appearance } from "@stripe/stripe-js";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("VITE_STRIPE_PUBLISHABLE_KEY is not configured.");
}

export const stripePromise = loadStripe(publishableKey);

export const payPilotAppearance: Appearance = {
  theme: "stripe",

  variables: {
    colorPrimary: "#5b35f5",
    colorBackground: "#ffffff",
    colorText: "#111831",
    colorDanger: "#dc2626",
    colorSuccess: "#16a34a",
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
    fontSizeBase: "16px",
    borderRadius: "8px",
    spacingUnit: "4px",
  },

  rules: {
    ".Input": {
      border: "1px solid #d8deea",
      boxShadow: "none",
      padding: "13px 14px",
    },

    ".Input:focus": {
      borderColor: "#6d4aff",
      boxShadow: "0 0 0 3px rgba(109, 74, 255, 0.12)",
    },

    ".Input--invalid": {
      borderColor: "#dc2626",
      boxShadow: "0 0 0 3px rgba(220, 38, 38, 0.1)",
    },

    ".Label": {
      color: "#111831",
      fontWeight: "500",
      marginBottom: "8px",
    },

    ".Tab": {
      border: "1px solid #d8deea",
      boxShadow: "none",
    },

    ".Tab--selected": {
      borderColor: "#6d4aff",
      boxShadow: "0 0 0 2px rgba(109, 74, 255, 0.12)",
    },
  },
};
