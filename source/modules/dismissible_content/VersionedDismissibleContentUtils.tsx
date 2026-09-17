// Module ID: 1956
// Function ID: 1957
// Name: VersionedDismissibleContentUtils
// Dependencies: [1957, 7698, 1944, 14100, 14101, 1895, 14102, 1970, 2]
// Exports: getVersionedDismissibleContentCurrentVersion

// Module 1956 (VersionedDismissibleContentUtils)
import dismissible_content from "dismissible_content" /* 1944 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7698 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(id) {
  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === id) {
    const marketingBySurface = CollectiblesMarketingsStore.getMarketingBySurface(tmp(14100).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (tmp(1944).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
    const obj = { storeState: EmbeddedActivitiesStore.getState(), surface: tmp(1895).EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return tmp(14101).getNewestBadgeableVersion(obj);
  } else {
    if (tmp(1944).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (tmp(1944).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (tmp(1944).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          return tmp(14102).getWideBannerDismissibleContentVersion();
        } else {
          if (tmp(1944).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
            if (tmp(1944).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
              if (tmp(1944).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                if (tmp(1944).DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === id) {
                  return 0;
                } else {
                  tmp(1970).assertUnreachable(id, { andFail: false });
                  return 0;
                }
              }
            }
          }
          return 1;
        }
      }
    }
    return 0;
  }
};
