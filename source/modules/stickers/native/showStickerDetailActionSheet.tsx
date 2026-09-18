// Module ID: 10645
// Function ID: 10646
// Name: showStickerDetailActionSheet
// Dependencies: [4689, 10646, 1897, 2]
// Exports: hideStickerDetailActionSheet, showStickerDetailActionSheet

// Module 10645 (showStickerDetailActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const sticker_detail_action_sheet = "sticker_detail_action_sheet";
const result = size.fileFinishedImporting("modules/stickers/native/showStickerDetailActionSheet.tsx");

export const hideStickerDetailActionSheet = function hideStickerDetailActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(sticker_detail_action_sheet);
};
export const showStickerDetailActionSheet = function showStickerDetailActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10646, dependencyMap.paths), sticker_detail_action_sheet, arg0);
};
