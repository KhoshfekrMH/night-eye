package come

import models.Users
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.SchemaUtils
import org.jetbrains.exposed.v1.jdbc.transactions.transaction

import io.github.cdimascio.dotenv.Dotenv

fun initDatabase() {
  //INFO: make your own database
  val dotenv = Dotenv.load()
  val dbName = dotenv.get("DB_NAME")
  val dbUser = dotenv.get("DB_USERNAME")
  val dbPassword = dotenv.get("DB_PASSWORD")

  Database.connect(
    "jdbc:postgresql://localhost:5432/$dbName",
    driver = "org.postgresql.Driver",
    user = dbUser,
    password = dbPassword
  )

  transaction {
    SchemaUtils.create(Users)
  }
}
