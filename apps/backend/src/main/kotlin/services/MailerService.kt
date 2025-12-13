package services

import org.slf4j.LoggerFactory
import at.quickme.kotlinmailer.delivery.*
import at.quickme.kotlinmailer.email.*

//WARN: I used MailHog to send emails!

class MailerService(
  host: String,
  port: Int
) {
  private val logger = LoggerFactory.getLogger(MailerService::class.java)
  private val mailer = mailerBuilder(host = host, port = port)
  suspend fun sendEmail(to: String, subject: String, text: String, from: String, replyTo: String? = null): Boolean {
    return try {
      emailBuilder {
        from(from)
        to(to)
        withSubject(subject)
        withPlainText(text)
        replyTo?.let { withReplyTo(it) }
      }.send(mailer)
      true
    } catch (e: Exception) {
      logger.error("Failed to send email from=$from to=$to subject=$subject", e)
      false
    }
  }
}
