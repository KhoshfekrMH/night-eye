package come

import come.initDatabase
import utils.seedUsers //INFO: used for make default users!
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.ratelimit.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json
import io.ktor.server.routing.*
import io.ktor.server.response.*
import kotlin.time.Duration.Companion.seconds

fun main(args: Array<String>) {
  io.ktor.server.netty.EngineMain.main(args)
}

@kotlin.time.ExperimentalTime
@kotlin.uuid.ExperimentalUuidApi
fun Application.module() {

  initDatabase()

  install(CORS) {
    allowHost("localhost:5173") //vite local poer
    allowHeader(HttpHeaders.ContentType)
    allowMethod(HttpMethod.Post)
    allowMethod(HttpMethod.Options)
  }
  install(ContentNegotiation) {
    json(
      Json {
        prettyPrint = true
        ignoreUnknownKeys = true
        isLenient = true
      }
    )
  }
  install(RateLimit) {
    register {
      rateLimiter(limit = 5, refillPeriod = 60.seconds)
    }
    register(RateLimitName("protected")) {
      rateLimiter(limit = 2, refillPeriod = 60.seconds)
    }
  }
  install(StatusPages) {
    status(HttpStatusCode.TooManyRequests) { call, status ->
      val retryAfter = call.response.headers["Retry-After"]
      call.respondText(text = "429: Too many requests. Wait for $retryAfter seconds.", status = status)
    }
  }

  configureRouting()
}
