// Module ID: 15847
// Function ID: 15848
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 6994, 1483, 15848, 2]
// Exports: default

// Module 15847 (CollectiblesShopViewAllCategoryItemsScreen)
import _modDef15848 from "module_15848" /* 15848 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6994);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1483).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1483);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(_modDef15848, {});
};
