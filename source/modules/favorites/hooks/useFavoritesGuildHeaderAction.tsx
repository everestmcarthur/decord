// Module ID: 16261
// Function ID: 16262
// Name: useFavoritesGuildHeaderAction
// Dependencies: [19, 1074, 10355, 1101, 1115, 3237, 2]
// Exports: default

// Module 16261 (useFavoritesGuildHeaderAction)
import router_utils from "router_utils" /* 1101 */;
import util from "util" /* 1115 */;
import _modDef3237 from "module_3237" /* 3237 */;
import FavoritesHooks from "FavoritesHooks" /* 10355 */;
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
    let ojM1xJ = _modDef3237.G9fGlP;
  } else {
    ojM1xJ = util.t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  obj2.exitPreview = callback;
  return obj2;
};
