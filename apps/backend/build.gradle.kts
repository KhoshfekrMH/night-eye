plugins {
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.ktor)

    kotlin("plugin.serialization") version "2.2.21"
}

group = "come"
version = "0.0.1"

application {
    mainClass = "io.ktor.server.netty.EngineMain"
}

dependencies {
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.server.netty)
    implementation(libs.logback.classic)
    implementation(libs.ktor.server.config.yaml)
    testImplementation(libs.ktor.server.test.host)
    testImplementation(libs.kotlin.test.junit)

    implementation(libs.dotenv.java)

    implementation("io.ktor:ktor-server-content-negotiation:3.3.2")
    implementation("io.ktor:ktor-serialization-kotlinx-json:3.3.2")

    implementation("io.ktor:ktor-server-cors:3.3.2")

    implementation("io.ktor:ktor-server-rate-limit:3.3.2")
    implementation("io.ktor:ktor-server-status-pages:3.3.2")

    implementation("at.quickme.kotlinmailer:core:1.1.20")
}
