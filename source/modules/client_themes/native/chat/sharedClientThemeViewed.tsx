// Module ID: 11953
// Function ID: 11954
// Name: handleSharedClientThemeViewed
// Dependencies: [8773, 1250, 2]
// Exports: handleSharedClientThemeViewed

// Module 11953 (handleSharedClientThemeViewed)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 1250 */;
import trackImpression from "trackImpression" /* 8773 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = trackImpression;
  obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
