package services

class HoneyService {
  fun isBot(nickname: String?): Boolean = !nickname.isNullOrBlank()
}
