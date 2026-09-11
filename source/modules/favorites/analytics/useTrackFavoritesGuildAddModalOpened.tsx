// Module ID: 11073
// Function ID: 11074
// Name: useTrackFavoritesGuildAddModalOpened
// Dependencies: [19, 1074, 1242, 2]
// Exports: default

// Module 11073 (useTrackFavoritesGuildAddModalOpened)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/useTrackFavoritesGuildAddModalOpened.tsx");

export default function useTrackFavoritesGuildAddModalOpened(source) {
  const items = [source];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.FAVORITES_GUILD_ADD_MODAL_OPENED, { source });
  }, items);
};
