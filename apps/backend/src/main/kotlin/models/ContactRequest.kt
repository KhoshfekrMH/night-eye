package models

import kotlinx.serialization.Serializable

@Serializable
data class ContactRequest(
  val subject: String,
  val email: String,
  val message: String,
  val nickname: String? = null
)
