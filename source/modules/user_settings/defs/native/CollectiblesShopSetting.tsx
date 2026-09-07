// Module ID: 15807
// Function ID: 15808
// Name: route
// Dependencies: [1074, 11473, 1114, 12142, 15808, 7541, 7182, 2]

// Module 15807 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import ShopIcon from "ShopIcon" /* 12142 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pWG4ze);
  },
  parent: null,
  IconComponent: ShopIcon.ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7541);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(7182).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(7182).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(15808) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
