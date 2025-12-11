package services

import at.quickme.kotlinmailer.delivery.*
import at.quickme.kotlinmailer.email.*

//WARN: I used MailHog to send emails!

class MailerService(
  host: String,
  port: Int
) {
  private val mailer = mailerBuilder(host = host, port = port)
  suspend fun sendEmail(to: String, subject: String, text: String, from: String): Boolean {
    return try {
      emailBuilder {
        from(from)
        to(to)
        withSubject(subject)
        withPlainText(text)
      }.send(mailer)
      true
    } catch (e: Exception) {
      e.printStackTrace()
      false
    }
  }
}
