// Module ID: 11752
// Function ID: 11753
// Name: showLongPressMessageActionSheet
// Dependencies: [4574, 11753, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11752 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11753, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
