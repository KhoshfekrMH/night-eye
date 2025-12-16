package utils

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.JWTVerifier
import java.util.Date
import io.github.cdimascio.dotenv.Dotenv

object JwtConfig {
  private val dotenv = Dotenv.load()

  private val secret = dotenv.get("JWT_SECRET")
  private val issuer = dotenv.get("JWT_ISSUER")
  private val audience = dotenv.get("JWT_AUDIENCE")
  private val expirationMs = dotenv.get("JWT_EXPIRES_IN").toLong()

  private val algorithm = Algorithm.HMAC256(secret)

  //TODO: make generateAccessToken and generateFreshToken
  fun generateToken(email: String, role: String): String {
    val now = System.currentTimeMillis()
    return JWT.create()
      .withIssuer(issuer)
      .withAudience(audience)
      .withIssuedAt(Date(now))
      .withClaim("email", email)
      .withClaim("role", role)
      .withExpiresAt(Date(now + expirationMs))
      .sign(algorithm)
  }

  val verifier: JWTVerifier = JWT
    .require(Algorithm.HMAC256(secret))
    .withAudience(audience)
    .withIssuer(issuer)
    .build()
}
