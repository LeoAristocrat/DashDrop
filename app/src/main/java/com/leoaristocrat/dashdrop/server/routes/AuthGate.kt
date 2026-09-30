package com.leoaristocrat.dashdrop.server.routes

import com.leoaristocrat.dashdrop.server.PinAuth

class AuthGate(
    val required: Boolean,
    private val pinAuth: PinAuth,
) {
    fun authenticate(pin: String): PinAuth.Result = pinAuth.tryConsume(pin)

    fun isAuthorized(token: String?): Boolean =
        !required || (token != null && pinAuth.validateToken(token))
}
