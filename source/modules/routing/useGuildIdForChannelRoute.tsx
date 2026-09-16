// Module ID: 4650
// Function ID: 4651
// Name: useGuildIdForChannelRoute
// Dependencies: [1961, 4459, 1074, 504, 1983, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4650 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import FavoriteStore from "FavoriteStore" /* 1961 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;

require = fn;
const FAVORITES = fn(1074).FAVORITES;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [SelectedGuildStore];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    let guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};
