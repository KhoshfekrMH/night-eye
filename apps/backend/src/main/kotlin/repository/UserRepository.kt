package repository

import models.User
import models.Users
import org.jetbrains.exposed.v1.core.*
import org.jetbrains.exposed.v1.jdbc.insert
import org.jetbrains.exposed.v1.jdbc.select
import org.jetbrains.exposed.v1.jdbc.selectAll
import org.jetbrains.exposed.v1.jdbc.transactions.transaction

private fun ResultRow.toUser(): User =
  User(
    id = this[Users.id],
    role = this[Users.role],
    name = this[Users.name],
    email = this[Users.email],
    passwordHash = this[Users.passwordHash],
    avatar = this[Users.avatar],
    createdAt = this[Users.createdAt],
    updatedAt = this[Users.updatedAt]
  )

object UserRepository {
  fun findById(id: String): User? = transaction {
    Users
      .selectAll()
      .where { Users.id.eq(id) }
      .singleOrNull()
      ?.toUser()
  }

  fun findByEmail(email: String): User? = transaction {
    Users
      .selectAll()
      .where { Users.email.eq(email) }
      .singleOrNull()
      ?.toUser()
  }

  fun findAll(): List<User> = transaction {
    Users.selectAll().map { it.toUser() }
  }

  fun create(user: User): User = transaction {
    Users.insert {
      it[id] = user.id
      it[role] = user.role
      it[name] = user.name
      it[email] = user.email
      it[passwordHash] = user.passwordHash
      it[avatar] = user.avatar
    }

    findById(user.id)!!
  }
}
