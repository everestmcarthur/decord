// Module ID: 10494
// Function ID: 10495
// Name: showStickerDetailActionSheet
// Dependencies: [4574, 10495, 1896, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10494 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10495, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
