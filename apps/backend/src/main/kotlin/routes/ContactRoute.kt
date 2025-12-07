package routes

import services.MailService
import models.ContactRequest

import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*

import io.mailtrap.client.MailtrapClient
import io.mailtrap.config.MailtrapConfig
import io.mailtrap.factory.MailtrapClientFactory
import io.mailtrap.model.request.emails.Address
import io.mailtrap.model.request.emails.MailtrapMail

import io.github.cdimascio.dotenv.Dotenv

fun Route.contactRoute() {
  val mailTrapToken = Dotenv.load().get("MAILTRAP_TOKEN")

  val mailService = MailService(
    token = "$mailTrapToken",
    inboxId = 4226251L
  )

  post("/contact") {
    val rawJson = call.receiveText()
    val request = kotlinx.serialization.json.Json.decodeFromString<ContactRequest>(rawJson)

    val subject = "New contact message from ${request.name}"
    val text = """
        Name: ${request.name}
        Email: ${request.email}
        Message: ${request.message}
    """.trimIndent()

    val ok = mailService.sendEmail(
      to = "${Dotenv.load().get("ADMIN_EMAIL")}", //TODO: must connected to db to get owner email
      subject = subject,
      text = text
    )

    if (ok) {
      call.respond(HttpStatusCode.OK, "Email sent!")
    } else {
      call.respond(HttpStatusCode.InternalServerError, "Error sending email.")
    }
  }
}
