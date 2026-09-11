// Module ID: 16824
// Function ID: 16825
// Name: trackFavoritesGuildViewed
// Dependencies: [1371, 1960, 1074, 1373, 10315, 1885, 1242, 10324, 2]
// Exports: default

// Module 16824 (trackFavoritesGuildViewed)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1885 */;
import FavoritesHooks from "FavoritesHooks" /* 10315 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10324 */;
import UserStore from "UserStore" /* 1371 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/analytics/trackFavoritesGuildViewed.tsx");

export default function trackFavoritesGuildViewed() {
  const obj = FavoritesHooks;
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  const obj4 = { source: null, total_favorites: null, is_xp_enabled: null, is_premium_tier_2: null };
  const obj3 = AnalyticsUtilsDefault;
  obj4.source = FavoritesGuildAnalytics.consumeNextFavoritesGuildViewSource();
  obj4.total_favorites = FavoriteStore.getFavoritesCountAgainstLimit();
  obj4.is_xp_enabled = obj.getFavoritesAccess().isExperimentEnabled;
  obj4.is_premium_tier_2 = isPremiumExactlyResult;
  obj3.track(AnalyticEvents.FAVORITES_GUILD_VIEWED, obj4);
};
