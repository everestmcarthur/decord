// Module ID: 11791
// Function ID: 11792
// Name: showLongPressMessageActionSheet
// Dependencies: [4606, 11792, 1897, 2]
// Exports: showLongPressMessageActionSheet

// Module 11791 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11792, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
