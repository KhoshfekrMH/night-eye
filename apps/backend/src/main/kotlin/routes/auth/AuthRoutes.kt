package routes.auth

import utils.JwtConfig
import routes.auth.dto.LoginRequest
import routes.auth.dto.RegisterRequest
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*
import services.UserService
import kotlinx.serialization.Serializable

import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*

import io.github.cdimascio.dotenv.Dotenv

@Serializable
data class AuthResponse(val accessToken: String, val role: String, val email: String)

@kotlin.time.ExperimentalTime
@kotlin.uuid.ExperimentalUuidApi
fun Route.authRoutes() {
  val dotenv = Dotenv.load()
  val audience = dotenv.get("JWT_AUDIENCE")

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
        call.respond(HttpStatusCode.BadRequest, "error: ${e.message}")
        return@post
      }

      call.respond(
        HttpStatusCode.Created, "User created with id ${user.id} and email ${user.email}"
      )
    }

    post("/login") {
      val req = call.receive<LoginRequest>()

      val user = UserService.authenticate(req.email, req.password)
        ?: return@post call.respond(HttpStatusCode.Unauthorized, "Invalid email or password")

      val token = JwtConfig.generateToken(user.email, user.role)
      call.respond(HttpStatusCode.OK, AuthResponse(accessToken = token, role = user.role, email = user.email))
    }

    authenticate("auth-jwt") {
      get("/$audience") {
        fun JWTPrincipal.requireRole(requered: String): Boolean = payload.getClaim("role").asString() == requered

        val principal = call.principal<JWTPrincipal>()!!
        val email = principal.payload.getClaim("email")?.asString()
        val role = principal.payload.getClaim("role")?.asString()

        if (!principal.requireRole("owner") && !principal.requireRole("admin") && !principal.requireRole("writer")) {
          call.respond(HttpStatusCode.Forbidden, "Forbidden, just for owner and access")
        }

        call.respond(
          HttpStatusCode.OK, "Hello $email, your role is $role"
        )
      }
    }
  }
}
