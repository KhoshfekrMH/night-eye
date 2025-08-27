import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";
import captchaRoutes from "./routes/captchaRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/email", emailRoutes);

app.use("/api/captcha", captchaRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;
