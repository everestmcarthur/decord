// Module ID: 11786
// Function ID: 11787
// Name: showLongPressMessageActionSheet
// Dependencies: [4603, 11787, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11786 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11787, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
