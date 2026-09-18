// Module ID: 16371
// Function ID: 16372
// Name: showThreadLongPressActionSheet
// Dependencies: [4689, 16372, 1897, 2]
// Exports: default

// Module 16371 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16372, dependencyMap.paths), "ThreadLongPressActionSheet", {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  });
};
