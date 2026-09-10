// Module ID: 10261
// Function ID: 10262
// Name: useTrackFavoritesGuildUpsellModalOpened
// Dependencies: [19, 1074, 7176, 7196, 1242, 2]
// Exports: default

// Module 10261 (useTrackFavoritesGuildUpsellModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7176 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildUpsellModalOpened.tsx");

export default function useTrackFavoritesGuildUpsellModalOpened(source) {
  importDefault = source;
  const items = [source];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source });
  }, items);
  return { analyticsLocations: useAnalyticsLocationsDefault(AnalyticsLocationDefault.FAVORITES_GUILD_UPSELL_MODAL).analyticsLocations };
};
