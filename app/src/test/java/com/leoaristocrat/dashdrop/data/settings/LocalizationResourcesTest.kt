package com.leoaristocrat.dashdrop.data.settings

import android.content.Context
import android.content.res.Configuration
import android.os.LocaleList
import androidx.test.core.app.ApplicationProvider
import com.leoaristocrat.dashdrop.R
import org.junit.Assert.assertEquals
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [33])
class LocalizationResourcesTest {
    private val context: Context = ApplicationProvider.getApplicationContext()

    @Test
    fun `core settings copy is available in English`() {
        val localized = context.forLanguage("en")

        assertEquals("Settings", localized.getString(R.string.settings_title))
        assertEquals("Follow system", localized.getString(R.string.language_system))
        assertEquals("System", localized.getString(R.string.theme_contrast_system))
        assertEquals("System", localized.getString(R.string.quick_settings_dark_system))
        assertEquals("English", localized.getString(R.string.language_english))
        assertEquals(
            "Couldn't open the link. Install a browser and try again.",
            localized.getString(R.string.settings_open_source_open_failed),
        )
    }

    @Test
    fun `empty state copy uses semantic line breaks in English`() {
        val localized = context.forLanguage("en")

        assertEquals(
            "Tap + to add local text or files.\nYou can also tap ☆ on a message or file.",
            localized.getString(R.string.favorites_empty),
        )
        assertEquals(
            "No previous sessions.\nTap “Start service” to begin your first transfer.",
            localized.getString(R.string.home_empty),
        )
    }

    private fun Context.forLanguage(languageTag: String): Context {
        val configuration = Configuration(resources.configuration).apply {
            setLocales(LocaleList.forLanguageTags(languageTag))
        }
        return createConfigurationContext(configuration)
    }
}
