// Module ID: 12044
// Function ID: 12045
// Name: sharedClientThemeViewed
// Dependencies: [8861, 1250, 2]
// Exports: handleSharedClientThemeViewed

// Module 12044 (sharedClientThemeViewed)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useTrackImpression from "useTrackImpression" /* 8861 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = useTrackImpression;
  obj.trackImpression({ type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} });
};
