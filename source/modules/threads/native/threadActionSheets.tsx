// Module ID: 11450
// Function ID: 11451
// Name: threadActionSheets
// Dependencies: [4606, 11451, 1897, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11450 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11451, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
