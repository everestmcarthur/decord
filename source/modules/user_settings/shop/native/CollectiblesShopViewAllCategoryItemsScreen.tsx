// Module ID: 15950
// Function ID: 15951
// Name: CollectiblesShopViewAllCategoryItemsScreen
// Dependencies: [19, 21, 7101, 1484, 15951, 2]
// Exports: default

// Module 15950 (CollectiblesShopViewAllCategoryItemsScreen)
import useNavigation from "useNavigation" /* 1484 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7101 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 15951 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  const obj3 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(CollectiblesShopViewAllCategoryItemsDefault, {});
};
