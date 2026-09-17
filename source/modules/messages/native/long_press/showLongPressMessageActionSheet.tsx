// Module ID: 11807
// Function ID: 11808
// Name: showLongPressMessageActionSheet
// Dependencies: [4607, 11808, 1897, 2]
// Exports: showLongPressMessageActionSheet

// Module 11807 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11808, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
