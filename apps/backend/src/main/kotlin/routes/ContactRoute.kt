package routes

import services.HoneyService
import services.MailerService
import models.ContactRequest

import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*
import io.ktor.server.plugins.ratelimit.*

import io.github.cdimascio.dotenv.Dotenv

//WARN: I used MailHog to send emails!

fun Route.contactRoute() {
  val dotenv = Dotenv.load()

  val mailHost: String = dotenv.get("MAILHOG_HOST")
  val mailPort = dotenv.get("MAILHOG_PORT").toInt()
  val adminEmail = dotenv.get("ADMIN_EMAIL")
  val mailerService = MailerService(host = mailHost, port = mailPort)

  rateLimit(RateLimitName("protected")) {
    post("/api/email/send-email") {
      val rawJson = call.receiveText()
      val request = kotlinx.serialization.json.Json.decodeFromString<ContactRequest>(rawJson)
      val honeyService = HoneyService()

      if (honeyService.isBot(request.nickname)) {
        call.respond(HttpStatusCode.Forbidden, mapOf("error" to "Blocked as bot"))
      }

      val text = """
                Subject: ${request.subject}
                Email: ${request.email}
                Message: ${request.message}
            """.trimIndent()

      val ok = mailerService.sendEmail(
        from = "no-reply@yourdomain.com", //WARN: it is internal email
        to = adminEmail,
        subject = request.subject,
        text = text,
        replyTo = request.email
      )

      if (ok) {
        call.respond(HttpStatusCode.OK, mapOf("message" to "Email sent successfully"))
      } else {
        call.respond(HttpStatusCode.InternalServerError, mapOf("error" to "Failed to send email"))
      }
    }
  }
}
