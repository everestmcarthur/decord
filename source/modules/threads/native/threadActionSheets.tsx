// Module ID: 11408
// Function ID: 11409
// Name: threadActionSheets
// Dependencies: [4574, 11409, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11408 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11409, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
