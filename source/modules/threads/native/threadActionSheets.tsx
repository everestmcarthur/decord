// Module ID: 11406
// Function ID: 11407
// Name: threadActionSheets
// Dependencies: [4573, 11407, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11406 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11407, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
