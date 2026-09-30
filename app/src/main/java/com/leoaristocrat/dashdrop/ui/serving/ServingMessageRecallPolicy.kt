package com.leoaristocrat.dashdrop.ui.serving

import com.leoaristocrat.dashdrop.data.settings.DashDropSettings
import com.leoaristocrat.dashdrop.session.Message
import com.leoaristocrat.dashdrop.session.Origin
import com.leoaristocrat.dashdrop.session.canRecallMessage

internal fun canShowServingRecallAction(settings: DashDropSettings, message: Message): Boolean {
    if (message is Message.File && message.status == Message.File.Status.FAILED) return false
    return canRecallMessage(
        requesterOrigin = Origin.PHONE,
        messageOrigin = message.origin,
        recallEnabled = settings.recallBetaEnabled,
        allowPeerRecall = settings.allowPeerRecall,
    )
}
