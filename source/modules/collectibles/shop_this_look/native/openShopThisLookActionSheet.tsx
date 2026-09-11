// Module ID: 13206
// Function ID: 13207
// Name: openShopThisLookActionSheet
// Dependencies: [4573, 13207, 1896, 2]
// Exports: openShopThisLookActionSheet

// Module 13206 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13207, dependencyMap.paths), c3, arg0, "stack");
};
