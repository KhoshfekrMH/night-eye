package models

import kotlinx.datetime.LocalDateTime

data class User(
  val id: String,
  val role: String,
  val name: String,
  val passwordHash: String,
  val email: String,
  val avatar: String,
  val createdAt: LocalDateTime,
  val updatedAt: LocalDateTime
)
