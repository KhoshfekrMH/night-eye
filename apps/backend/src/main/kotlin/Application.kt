package come

import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json
import io.ktor.server.routing.*

fun main(args: Array<String>) {
  io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
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

  configureRouting()
}
