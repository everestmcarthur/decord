// Module ID: 16267
// Function ID: 16268
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [1961, 1971, 1074, 504, 10371, 1983, 1115, 3239, 2]
// Exports: default

// Module 16267 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 504 */;
import _modDef3239 from "module_3239" /* 3239 */;
import FavoritesHooks from "FavoritesHooks" /* 10371 */;
import FavoriteStore from "FavoriteStore" /* 1961 */;

require = fn;
let closure_4 = fn(1971).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  FavoritesHooks;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            const formatted = str.trim().toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              const obj2 = { label: null, tooltip: null };
              const intl = tmp(1115).intl;
              obj2.label = intl.string(_modDef3239.WsUrMD);
              const intl2 = tmp(1115).intl;
              obj2.tooltip = intl2.string(_modDef3239.dW9Kov);
              tmp6 = obj2;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(1983);
      }
    }
  }
  return tmp6;
};
