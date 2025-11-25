import express from "express";
import { sendEmail } from "../util/sendEmail.js";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { fromEmail, subject, html } = req.body;
  if (!fromEmail || !subject || !html) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  const result = await sendEmail(fromEmail, subject, html);

  if (result.success) {
    res.json({ success: true, messageId: result.messageId });
  } else {
    res.status(500).json(result);
  }
});

export default router;
