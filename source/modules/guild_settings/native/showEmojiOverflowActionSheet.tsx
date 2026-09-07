// Module ID: 17568
// Function ID: 17569
// Name: showEmojiOverflowActionSheet
// Dependencies: [4527, 17569, 1896, 2]
// Exports: default

// Module 17568 (showEmojiOverflowActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(17569, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};
