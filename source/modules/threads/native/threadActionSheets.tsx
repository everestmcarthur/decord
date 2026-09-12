// Module ID: 11445
// Function ID: 11446
// Name: threadActionSheets
// Dependencies: [4603, 11446, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11445 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11446, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
