export async function sendEmailApi(email, subject, message) {
  try {
    const res = await fetch("http://localhost:8080/api/email/send-email", {
      //ktor backend port
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
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
