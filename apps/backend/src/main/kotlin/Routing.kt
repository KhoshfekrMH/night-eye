package come

import routes.contactRoute
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*


fun Application.configureRouting() {
  routing {
    get("/api") {
      call.respondText("Backend is running!")
    }
    contactRoute()
  }
}
