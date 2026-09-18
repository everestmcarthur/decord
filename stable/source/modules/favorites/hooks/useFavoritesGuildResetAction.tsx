// Module ID: 16142
// Function ID: 16143
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4381, 1074, 1935, 10229, 1982, 1100, 10228, 1114, 3225, 2]
// Exports: default

// Module 16142 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 1935 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import _modDef3225 from "module_3225" /* 3225 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10228 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

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
  const intl = tmp(1114).intl;
  obj2.label = intl.string(_modDef3225.YkET6R);
  const intl2 = tmp(1114).intl;
  obj2.subLabel = intl2.string(_modDef3225.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
