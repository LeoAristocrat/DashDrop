package com.leoaristocrat.dashdrop

import android.app.Application
import coil3.ImageLoader
import coil3.PlatformContext
import coil3.SingletonImageLoader
import coil3.video.VideoFrameDecoder
import com.leoaristocrat.dashdrop.di.ServiceLocator
import com.leoaristocrat.dashdrop.ui.components.StoredVideoFetcher
import com.leoaristocrat.dashdrop.ui.components.StoredVideoKeyer
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch

class DashDropApp : Application(), SingletonImageLoader.Factory {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    override fun onCreate() {
        super.onCreate()
        ServiceLocator.init(this)
        // Crash recovery for unfinished sessions left over from a killed process.
        // Non-blocking; failures are logged-only and don't impact app usability.
        scope.launch {
            runCatching { ServiceLocator.repository.finalizeOrphans() }
        }
    }

    override fun newImageLoader(context: PlatformContext): ImageLoader =
        ImageLoader.Builder(context)
            .components {
                add(StoredVideoFetcher.Factory())
                add(StoredVideoKeyer())
                add(VideoFrameDecoder.Factory())
            }
            .build()
}

typealias FlikkyApp = DashDropApp
