// Module ID: 16299
// Function ID: 16300
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4461, 1074, 1936, 10371, 1983, 1101, 10370, 1115, 3239, 2]
// Exports: default

// Module 16299 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 1936 */;
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import _modDef3239 from "module_3239" /* 3239 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10370 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = UserSettings.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  const callback = noop.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      tmp(tmp2[6]).transitionTo(constants.ME);
      const tmpResult = tmp(tmp2[6]);
    }
    obj = FavoritesUtils;
    FavoritesActionCreators.resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  const obj2 = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1115).intl;
  obj2.label = intl.string(_modDef3239.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3239.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
