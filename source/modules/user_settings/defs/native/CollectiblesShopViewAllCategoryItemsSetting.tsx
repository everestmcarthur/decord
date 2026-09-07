// Module ID: 15846
// Function ID: 15847
// Name: route
// Dependencies: [1074, 11473, 14845, 15847, 2]

// Module 15846 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14845 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return require(15847) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;
