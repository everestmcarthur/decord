// Module ID: 11906
// Function ID: 11907
// Name: showLongPressMessageActionSheet
// Dependencies: [4723, 11907, 1980, 2]
// Exports: showLongPressMessageActionSheet

// Module 11906 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11907, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
