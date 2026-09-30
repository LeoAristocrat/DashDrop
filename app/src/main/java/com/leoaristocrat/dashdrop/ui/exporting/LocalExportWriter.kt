package com.leoaristocrat.dashdrop.ui.exporting

import android.content.Context
import android.net.Uri
import com.leoaristocrat.dashdrop.export.ExportSnapshot
import com.leoaristocrat.dashdrop.export.ZipExporter
import com.leoaristocrat.dashdrop.R
import java.io.File
import java.io.IOException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

object LocalExportWriter {
    suspend fun write(
        context: Context,
        uri: Uri,
        snapshot: ExportSnapshot,
        sessionFileResolver: (sessionId: Long, fileId: String) -> File?,
        favoriteFileResolver: (fileId: String) -> File?,
    ) = withContext(Dispatchers.IO) {
        val output = context.contentResolver.openOutputStream(uri, "w")
            ?: throw IOException(context.getString(R.string.export_write_failed))
        output.use {
            ZipExporter.write(
                out = it,
                snapshot = snapshot,
                fileResolver = sessionFileResolver,
                favoriteFileResolver = favoriteFileResolver,
            )
        }
    }
}
