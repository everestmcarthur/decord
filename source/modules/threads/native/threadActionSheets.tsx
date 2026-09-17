// Module ID: 11466
// Function ID: 11467
// Name: threadActionSheets
// Dependencies: [4607, 11467, 1897, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11466 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11467, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
