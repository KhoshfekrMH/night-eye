package services

import io.mailtrap.client.MailtrapClient
import io.mailtrap.config.MailtrapConfig
import io.mailtrap.factory.MailtrapClientFactory
import io.mailtrap.model.request.emails.Address
import io.mailtrap.model.request.emails.MailtrapMail

class MailService(
  token: String,
  inboxId: Long,
  sandbox: Boolean = true
) {
  private val client: MailtrapClient

  init {
    val config = MailtrapConfig.Builder()
      .sandbox(sandbox)
      .inboxId(inboxId)
      .token(token)
      .build()

    client = MailtrapClientFactory.createMailtrapClient(config)
  }

  fun sendEmail(to: String, subject: String, text: String): Boolean {
    val mail = MailtrapMail.builder()
      .from(Address("test@example.com", "Night Eye"))
      .to(listOf(Address(to.lowercase())))
      .subject(subject)
      .text(text)
      .category("Night Eye Email")
      .build()

    return try {
      client.send(mail)
      true
    } catch (e: Exception) {
      e.printStackTrace()
      false
    }
  }
}
