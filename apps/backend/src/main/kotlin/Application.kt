package come

import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json
import io.ktor.server.routing.*

fun main(args: Array<String>) {
  io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
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
