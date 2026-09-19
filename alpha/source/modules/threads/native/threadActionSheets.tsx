// Module ID: 11573
// Function ID: 11574
// Name: threadActionSheets
// Dependencies: [4723, 11574, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11573 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11574, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
