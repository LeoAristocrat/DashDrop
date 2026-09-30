package com.leoaristocrat.dashdrop.data.settings

import org.junit.Assert.assertEquals
import org.junit.Test

class AppLanguageTest {
    @Test
    fun `empty language tags follow the system`() {
        assertEquals(AppLanguage.SYSTEM, AppLanguage.fromLanguageTags(""))
    }

    @Test
    fun `English language tags select English`() {
        assertEquals(AppLanguage.ENGLISH, AppLanguage.fromLanguageTags("en"))
        assertEquals(AppLanguage.ENGLISH, AppLanguage.fromLanguageTags("en-US"))
    }

    @Test
    fun `unsupported language tags fall back to system`() {
        assertEquals(AppLanguage.SYSTEM, AppLanguage.fromLanguageTags("fr"))
        assertEquals(AppLanguage.SYSTEM, AppLanguage.fromLanguageTags("zh-CN"))
    }

    @Test
    fun `explicit app language wins when resolving the web language`() {
        assertEquals(
            "en",
            AppLanguage.resolveEffectiveLanguageTag(
                applicationLanguageTags = "en-US",
                systemLanguageTags = "fr-FR",
            ),
        )
    }

    @Test
    fun `system mode selects the first supported system locale`() {
        assertEquals(
            "en",
            AppLanguage.resolveEffectiveLanguageTag(
                applicationLanguageTags = "",
                systemLanguageTags = "fr-FR,en-US",
            ),
        )
    }

    @Test
    fun `unsupported system locales fall back to default English`() {
        assertEquals(
            "en",
            AppLanguage.resolveEffectiveLanguageTag(
                applicationLanguageTags = "",
                systemLanguageTags = "fr-FR,de-DE",
            ),
        )
    }
}
