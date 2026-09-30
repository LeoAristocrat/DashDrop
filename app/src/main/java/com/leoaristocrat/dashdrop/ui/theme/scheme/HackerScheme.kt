package com.leoaristocrat.dashdrop.ui.theme.scheme

import androidx.compose.material3.ColorScheme
import com.leoaristocrat.dashdrop.ui.theme.ResolvedContrast
import com.leoaristocrat.dashdrop.ui.theme.customScheme

/** Hacker theme scheme. */
internal object HackerScheme : ThemeScheme {
    private const val SEED = 0xFF00E676L // Terminal Green
    override val light: ColorScheme = customScheme(SEED, dark = false, ResolvedContrast.STANDARD)
    override val dark: ColorScheme = customScheme(SEED, dark = true, ResolvedContrast.STANDARD)
    override val lightMedium: ColorScheme = customScheme(SEED, dark = false, ResolvedContrast.MEDIUM)
    override val lightHigh: ColorScheme = customScheme(SEED, dark = false, ResolvedContrast.HIGH)
    override val darkMedium: ColorScheme = customScheme(SEED, dark = true, ResolvedContrast.MEDIUM)
    override val darkHigh: ColorScheme = customScheme(SEED, dark = true, ResolvedContrast.HIGH)
}
