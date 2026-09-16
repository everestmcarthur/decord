// Module ID: 11458
// Function ID: 11459
// Name: threadActionSheets
// Dependencies: [4605, 11459, 1897, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11458 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11459, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
