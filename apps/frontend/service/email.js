export async function sendEmailApi(fromEmail, subject, message) {
  try {
    const res = await fetch("http://localhost:5000/api/email/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromEmail, subject, html: message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("Email sending API failed:", error); //TODO: remove console.log
    throw error;
  }
}
