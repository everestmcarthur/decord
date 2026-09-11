// Module ID: 11250
// Function ID: 11251
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [19, 1371, 1373, 8279, 1074, 7281, 11251, 7706, 504, 7455, 4573, 11252, 1896, 11252, 1242, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 11250 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import openUserSettings from "openUserSettings" /* 7455 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 11252 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = fn(8279).DEFAULT_PREMIUM_BADGE_ID;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const UserProfileThemeTypes = fn(7281).UserProfileThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  _require = id;
  dependencyMap = themeType;
  let isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let tmp4 = typeof id === "string";
  if (typeof id === "string") {
    tmp4 = null != tmp(7706).getTieredTenureBadge(id);
    const tmpResult = tmp(7706);
  }
  let obj = require("useIsPremiumSubscriber");
  const items = [isPremiumSubscriber];
  const stateFromStores = require("initialize").useStateFromStores(items, () => isPremiumSubscriber.getCurrentUser());
  if (!tmp4) {
    let tmp7 = id === DEFAULT_PREMIUM_BADGE_ID;
    if (tmp7) {
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      tmp7 = userId === id;
    }
    if (tmp7) {
      tmp7 = isPremiumSubscriber;
    }
    tmp4 = tmp7;
  }
  isPremiumSubscriber = tmp4;
  const items1 = [themeType, userId, tmp4, id, isPremiumSubscriber];
  let callback = null;
  if (tmp4) {
    callback = isPremiumSubscriber.useCallback(() => {
      if (closure_2 === UserProfileThemeTypes.YOU_SCREEN) {
        const obj2 = { screen: constants2.PREMIUM };
        openUserSettings.openUserSettings(obj2);
      } else {
        const obj = ActionSheetActionCreatorsDefault;
        const tmp4 = asyncRequireImpl(11252, dependencyMap.paths);
        const obj4 = { userId };
        obj.openLazy(tmp4, TieredTenureBadgeActionSheet.TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj4, "stack");
      }
      if (isPremiumSubscriber) {
        const obj6 = { badge, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        AnalyticsUtilsDefault.track(constants.TIERED_TENURE_BADGE_CLICKED, obj6);
      }
    }, items1);
  }
  return callback;
};
