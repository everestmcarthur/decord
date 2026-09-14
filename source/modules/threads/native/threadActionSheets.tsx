// Module ID: 11446
// Function ID: 11447
// Name: threadActionSheets
// Dependencies: [4603, 11447, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11446 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11447, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
