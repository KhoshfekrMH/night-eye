package routes.auth

import routes.auth.dto.LoginRequest
import routes.auth.dto.RegisterRequest
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*
import services.UserService
import kotlinx.serialization.Serializable

@kotlin.time.ExperimentalTime
@kotlin.uuid.ExperimentalUuidApi
fun Route.authRoutes() {
  route("/auth") {
    post("/register") {
      val req = call.receive<RegisterRequest>()

      val user = runCatching {
        UserService.createUser(
          role = "user",
          name = req.name,
          email = req.email,
          plainPassword = req.password
        )
      }.getOrElse { e ->
        call.respond(HttpStatusCode.BadRequest, mapOf("error" to e.message))
        return@post
      }

      call.respond(
        HttpStatusCode.Created, mapOf(
          "id" to user.id,
          "email" to user.email
        )
      )
    }

    post("/login") {
      val req = call.receive<LoginRequest>()

      val user = UserService.authenticate(req.email, req.password)
        ?: return@post call.respond(HttpStatusCode.Unauthorized, "Invalid email or password")

      //TODO: JWT needed!
      call.respond(
        HttpStatusCode.OK, mapOf(
          "id" to user.id,
          "email" to user.email
        )
      )
    }
  }
}
