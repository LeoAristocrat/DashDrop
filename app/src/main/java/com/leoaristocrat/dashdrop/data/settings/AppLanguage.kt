package com.leoaristocrat.dashdrop.data.settings

enum class AppLanguage(val languageTags: String) {
    SYSTEM(""),
    ENGLISH("en"),
    ;

    companion object {
        const val DEFAULT_LANGUAGE_TAG = "en"

        fun fromLanguageTags(languageTags: String): AppLanguage {
            val language = languageTags
                .substringBefore(',')
                .substringBefore('-')
                .lowercase()

            return when (language) {
                "en" -> ENGLISH
                else -> SYSTEM
            }
        }

        fun resolveEffectiveLanguageTag(
            applicationLanguageTags: String,
            systemLanguageTags: String,
        ): String {
            val candidates = if (applicationLanguageTags.isBlank()) {
                systemLanguageTags
            } else {
                applicationLanguageTags
            }
            return candidates
                .split(',')
                .firstNotNullOfOrNull { tag ->
                    when (tag.trim().substringBefore('-').lowercase()) {
                        "en" -> ENGLISH.languageTags
                        else -> null
                    }
                }
                ?: DEFAULT_LANGUAGE_TAG
        }
    }
}
