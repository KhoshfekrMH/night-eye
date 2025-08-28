import express from "express";
import svgCaptcha from "svg-captcha";

const router = express.Router();

router.get("/generate-captcha", (req, res) => {
  const captcha = svgCaptcha.create({
    size: 6,
    noise: 3,
    color: true,
    background: "#f0f0f0",
  });
  req.session.captcha = captcha.text;

  res.type("svg");
  res.status(200).send(captcha.data);
});

router.post("/verify-captcha", (req, res) => {
  const { captcha } = req.body;

  if (captcha === req.session.captcha) {
    res.json({ success: true });
  } else {
    res.json({ success: false, error: "Invalid captcha" });
  }
});

export default router;
