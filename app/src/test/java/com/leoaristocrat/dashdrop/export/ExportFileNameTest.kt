package com.leoaristocrat.dashdrop.export

import java.util.TimeZone
import org.junit.Assert.assertEquals
import org.junit.Test

class ExportFileNameTest {
    private val utc = TimeZone.getTimeZone("UTC")

    @Test fun `file names identify every export scope`() {
        val now = 1_700_000_000_000L

        assertEquals("dashdrop-sessions-20231114-221320.zip", ExportFileName.build(ExportScope.SESSIONS, now, utc))
        assertEquals("dashdrop-favorites-20231114-221320.zip", ExportFileName.build(ExportScope.FAVORITES, now, utc))
        assertEquals("dashdrop-settings-20231114-221320.zip", ExportFileName.build(ExportScope.SETTINGS, now, utc))
        assertEquals("dashdrop-all-20231114-221320.zip", ExportFileName.build(ExportScope.ALL, now, utc))
    }
}
