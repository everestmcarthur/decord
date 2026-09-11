// Module ID: 13208
// Function ID: 13209
// Name: openShopThisLookActionSheet
// Dependencies: [4574, 13209, 1896, 2]
// Exports: openShopThisLookActionSheet

// Module 13208 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13209, dependencyMap.paths), c3, arg0, "stack");
};
