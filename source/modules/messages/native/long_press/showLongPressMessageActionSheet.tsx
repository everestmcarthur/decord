// Module ID: 11688
// Function ID: 11689
// Name: showLongPressMessageActionSheet
// Dependencies: [4541, 11689, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11688 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11689, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
