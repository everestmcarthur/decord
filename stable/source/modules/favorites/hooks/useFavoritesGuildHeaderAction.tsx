// Module ID: 16154
// Function ID: 16155
// Name: useFavoritesGuildHeaderAction
// Dependencies: [19, 1074, 10229, 1100, 1114, 3225, 2]
// Exports: default

// Module 16154 (useFavoritesGuildHeaderAction)
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import _modDef3225 from "module_3225" /* 3225 */;
import FavoritesHooks from "FavoritesHooks" /* 10229 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  const hasAccess = FavoritesHooks.useFavoritesAccess().hasAccess;
  const obj2 = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(constants.ME);
  }, []);
  const intl = util.intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3225.G9fGlP;
  } else {
    ojM1xJ = util.t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  obj2.exitPreview = callback;
  return obj2;
};
