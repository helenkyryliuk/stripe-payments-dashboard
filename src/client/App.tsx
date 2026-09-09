// import { useState } from "react";
import { loadStripe, type Appearance } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar.tsx";
import { OnlinePaymentForm } from "./OnlinePaymentForm.tsx";

const appearance: Appearance | undefined = {
  theme: "stripe",
};
// Enable the skeleton loader UI for optimal loading.
const loader = "auto";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App({ children }: { children: React.ReactNode }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/complete") {
      return;
    }

    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [stripePromise]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <h2 className="create-payment-header">Create Payment</h2>
          <div className="create-payment-description">
            Create a one-time payment link and configure your payment.
          </div>

          <div>
            {clientSecret && (
              <Elements
                options={{ clientSecret, appearance, loader }}
                stripe={stripePromise}
              >
                <OnlinePaymentForm></OnlinePaymentForm>
              </Elements>
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
