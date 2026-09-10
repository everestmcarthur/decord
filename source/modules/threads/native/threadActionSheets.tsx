// Module ID: 11384
// Function ID: 11385
// Name: threadActionSheets
// Dependencies: [4572, 11385, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11384 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11385, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
