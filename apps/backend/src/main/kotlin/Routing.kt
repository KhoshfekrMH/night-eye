package come

import routes.contactRoute
import routes.auth.authRoutes
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.*


@kotlin.time.ExperimentalTime
@kotlin.uuid.ExperimentalUuidApi
fun Application.configureRouting() {
  routing {
    get("/api") {
      call.respondText("Backend is running!")
    }

    contactRoute()
    authRoutes()
  }
}
