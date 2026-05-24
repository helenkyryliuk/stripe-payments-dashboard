import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.get("/api/message", (_, res) => res.send("Hello from Express!"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000..."));
