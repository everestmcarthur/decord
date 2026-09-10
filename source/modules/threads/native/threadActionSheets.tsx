// Module ID: 11344
// Function ID: 11345
// Name: threadActionSheets
// Dependencies: [4541, 11345, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11344 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11345, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
