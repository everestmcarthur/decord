// Module ID: 11728
// Function ID: 11729
// Name: showLongPressMessageActionSheet
// Dependencies: [4572, 11729, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11728 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11729, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
