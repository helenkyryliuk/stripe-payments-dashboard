import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
const app = express();

dotenv.config();

const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY);

app.get("/api/message", (_, res) => res.send("Hello from Express!"));

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle events safely
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      console.log("💰 Payment successful:", session.id);

      // TODO:
      // mark user as paid
      // unlock features
      // store session in DB

      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;

      console.log("❌ Payment failed:", paymentIntent.id);

      // TODO: update DB status

      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object;

      console.log("📄 Invoice paid:", invoice.id);

      // TODO: subscription logic

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // IMPORTANT: respond quickly
  res.json({ received: true });
});
