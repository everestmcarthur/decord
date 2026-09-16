// Module ID: 16269
// Function ID: 16270
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4459, 1074, 1936, 10363, 1983, 1101, 10362, 1115, 3237, 2]
// Exports: default

// Module 16269 (useFavoritesGuildResetAction)
import UserSettings from "UserSettings" /* 1936 */;
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import _modDef3237 from "module_3237" /* 3237 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10362 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;

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
  obj2.label = intl.string(_modDef3237.YkET6R);
  const intl2 = tmp(1115).intl;
  obj2.subLabel = intl2.string(_modDef3237.ZzcwNk);
  obj2.perform = callback;
  return obj2;
};
