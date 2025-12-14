package services

import models.User
import repository.UserRepository

import kotlin.time.Clock
import kotlin.uuid.Uuid
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import at.favre.lib.crypto.bcrypt.BCrypt


@kotlin.time.ExperimentalTime
@kotlin.uuid.ExperimentalUuidApi
object UserService {
  private fun hashPassword(password: String): String = BCrypt.withDefaults().hashToString(12, password.toCharArray())

  fun verifyPassword(password: String, hash: String): Boolean {
    val result = BCrypt.verifyer().verify(password.toCharArray(), hash)
    return result.verified
  }

  fun createUser(
    role: String,
    name: String,
    email: String,
    plainPassword: String,
    avatar: String = ""
  ): User {

    val now = Clock.System.now().toLocalDateTime(TimeZone.UTC)

    val user = User(
      id = Uuid.random().toString(),
      role = role,
      name = name,
      email = email,
      passwordHash = hashPassword(plainPassword),
      avatar = avatar,
      createdAt = now,
      updatedAt = now
    )

    return UserRepository.create(user)
  }

  fun authenticate(email: String, password: String): User? {
    val user = UserRepository.findByEmail(email) ?: return null
    return if (verifyPassword(password, user.passwordHash)) user else null
  }
}
