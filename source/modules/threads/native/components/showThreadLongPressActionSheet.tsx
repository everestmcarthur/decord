// Module ID: 16117
// Function ID: 16118
// Name: showThreadLongPressActionSheet
// Dependencies: [4527, 16118, 1896, 2]
// Exports: default

// Module 16117 (showThreadLongPressActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(16118, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
