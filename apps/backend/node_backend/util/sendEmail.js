import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ADMIN_EMAIL,
    pass: ADMIN_PASSWORD,
  },
});

export async function sendEmail(fromEmail, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `Website Contact Form"<${ADMIN_EMAIL}>"`,
      to: ADMIN_EMAIL,
      replyTo: fromEmail,
      subject,
      html,
    });

    console.log("Email sent:", info.messageId); //TODO: remove console.log
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending failed:", error); //TODO: remove console.log
    return { success: false, error: error.message };
  }
}
