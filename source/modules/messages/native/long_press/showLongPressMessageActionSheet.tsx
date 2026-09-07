// Module ID: 11662
// Function ID: 11663
// Name: showLongPressMessageActionSheet
// Dependencies: [4527, 11663, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11662 (showLongPressMessageActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11663, dependencyMap.paths), "MessageLongPressActionSheet", closure_0);
};
