package routes.auth

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable
import routes.auth.dto.LoginRequest
import routes.auth.dto.RegisterRequest
import services.UserService
import utils.JwtConfig
import utils.hasRole

@Serializable data class AuthResponse(val accessToken: String, val role: String, val email: String)

@kotlin.time.ExperimentalTime
@kotlin.uuid.ExperimentalUuidApi
fun Route.authRoutes() {
  route("/auth") {
    post("/register") {
      val req = call.receive<RegisterRequest>()

      val user =
          runCatching {
                UserService.createUser(
                    role = "user", name = req.name, email = req.email, plainPassword = req.password)
              }
              .getOrElse { e ->
                call.respond(HttpStatusCode.BadRequest, "error: ${e.message}")
                return@post
              }

      call.respond(
          HttpStatusCode.Created, "User created with id ${user.id} and email ${user.email}")
    }

    post("/login") {
      val req = call.receive<LoginRequest>()

      val user =
          UserService.authenticate(req.email, req.password)
              ?: return@post call.respond(HttpStatusCode.Unauthorized, "Invalid email or password")

      val token =
          JwtConfig.generateAccessToken(userId = user.id, email = user.email, role = user.role)
      call.respond(
          HttpStatusCode.OK,
          AuthResponse(accessToken = token, role = user.role, email = user.email))
    }

    authenticate("auth-jwt") {
      get("/me") {
        val principal = call.principal<JWTPrincipal>()!!

        if (!principal.hasRole("owner")) {
          call.respond(
              HttpStatusCode.Forbidden,
              mapOf("error" to "FORBIDDEN", "message" to "Insufficient role"))
          return@get
        }

        call.respond(
            mapOf(
                "id" to principal.payload.getClaim("uid").asString(),
                "email" to principal.payload.getClaim("email").asString(),
                "role" to principal.payload.getClaim("role").asString()))
      }
    }
  }
}
