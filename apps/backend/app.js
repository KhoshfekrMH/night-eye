import express from "express";
import session from "express-session";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";
import captchaRoutes from "./routes/captchaRoutes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", //TODO: temp: please put server link in env
    credentials: true,
  }),
);

app.use("/api/email", emailRoutes);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.use("/api/captcha", captchaRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

export default app;
