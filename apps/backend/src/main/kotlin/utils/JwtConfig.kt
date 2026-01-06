package utils

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import io.github.cdimascio.dotenv.Dotenv
import java.util.Date

object JwtConfig {
  private val dotenv = Dotenv.load()

  private val secret = dotenv.get("JWT_SECRET")
  private val issuer = dotenv.get("JWT_ISSUER")
  private val audience = dotenv.get("JWT_AUDIENCE")
  private val expirationMs = dotenv.get("JWT_EXPIRES_IN").toLong()

  private val algorithm = Algorithm.HMAC256(secret)

  fun generateAccessToken(userId: String, email: String, role: String): String {
    val now = System.currentTimeMillis()
    return JWT.create()
        .withIssuer(issuer)
        .withAudience(audience)
        .withIssuedAt(Date(now))
        .withClaim("uid", userId)
        .withClaim("email", email)
        .withClaim("role", role)
        .withExpiresAt(Date(now + expirationMs))
        .sign(algorithm)
  }

  val verifier: JWTVerifier =
      JWT.require(Algorithm.HMAC256(secret)).withAudience(audience).withIssuer(issuer).build()
}
