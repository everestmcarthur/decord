// Module ID: 13260
// Function ID: 13261
// Name: openShopThisLookActionSheet
// Dependencies: [4605, 13261, 1897, 2]
// Exports: openShopThisLookActionSheet

// Module 13260 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13261, dependencyMap.paths), c3, arg0, "stack");
};
