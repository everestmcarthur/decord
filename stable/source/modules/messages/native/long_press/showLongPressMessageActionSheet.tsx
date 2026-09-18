// Module ID: 11662
// Function ID: 11663
// Name: showLongPressMessageActionSheet
// Dependencies: [4527, 11663, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11662 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11663, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
