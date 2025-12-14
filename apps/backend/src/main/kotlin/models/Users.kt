package models

import org.jetbrains.exposed.v1.core.*
import org.jetbrains.exposed.v1.datetime.*

object Users : Table("users") {
  val id = varchar("id", 10)
  val role = varchar("role", 20)
  val name = varchar("name", 50)
  val passwordHash = varchar("password_hash", 255)
  val email = varchar("email", 100)
  val avatar = varchar("avatar", 255)
  val createdAt = datetime("created_at")
  val updatedAt = datetime("updated_at")

  override val primaryKey = PrimaryKey(id, name = "PK_User_ID")
}
