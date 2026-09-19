// Module ID: 11244
// Function ID: 11245
// Name: useFavoritesGuildChannelFilter
// Dependencies: [19, 2041, 4395, 2044, 1074, 504, 10090, 2066, 1370, 2]
// Exports: default

// Module 11244 (useFavoritesGuildChannelFilter)
import sortByMatchScore from "sortByMatchScore" /* 10090 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import FavoriteStore from "FavoriteStore" /* 2044 */;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildChannelFilter.tsx");

export default function useFavoritesGuildChannelFilter() {
  const items = [FavoriteStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const items1 = [stateFromStores];
  return noop.useCallback((type, arg1) => {
    type = type.type;
    if (sortByMatchScore.AutocompleterResultTypes.USER === type) {
      const dMChannelFromUserId = ChannelStore.getDMChannelFromUserId(type.record.id);
      let tmp13 = !arg1;
      if (!arg1) {
        tmp13 = null == dMChannelFromUserId;
      }
      let tmp15 = !tmp13;
      if (!tmp13) {
        let tmp17 = null == dMChannelFromUserId;
        if (!tmp17) {
          tmp17 = null == stateFromStores[dMChannelFromUserId.id];
        }
        tmp15 = tmp17;
      }
      return tmp15;
    } else if (tmp(10090).AutocompleterResultTypes.GROUP_DM === type) {
      return null == stateFromStores[type.record.id];
    } else {
      if (tmp(10090).AutocompleterResultTypes.TEXT_CHANNEL !== type) {
        if (tmp(10090).AutocompleterResultTypes.VOICE_CHANNEL !== type) {
          return tmp(1370).assertNever(type);
        }
      }
      let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, type.record);
      if (canResult) {
        canResult = tmp(2066).isFavoritableChannel(type.record);
        const tmpResult2 = tmp(2066);
      }
      if (canResult) {
        canResult = null == stateFromStores[type.record.id];
      }
      return canResult;
    }
  }, items1);
};
