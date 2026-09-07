// Module ID: 10225
// Function ID: 10226
// Name: showLongPressForumPostActionSheet
// Dependencies: [4527, 10226, 1896, 2]
// Exports: default

// Module 10225 (showLongPressForumPostActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10226, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
