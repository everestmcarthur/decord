// Module ID: 12091
// Function ID: 12092
// Name: sharedClientThemeViewed
// Dependencies: [8908, 1249, 2]
// Exports: handleSharedClientThemeViewed

// Module 12091 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useTrackImpression from "useTrackImpression" /* 8908 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  obj.trackImpression({ type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} });
};
