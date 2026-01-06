package utils

import io.ktor.server.auth.jwt.*

fun JWTPrincipal.hasRole(vararg roles: String): Boolean {
  val role = payload.getClaim("role").asString()
  return roles.contains(role)
}
