// Module ID: 17989
// Function ID: 17990
// Name: showEmojiOverflowActionSheet
// Dependencies: [4723, 17990, 1980, 2]
// Exports: default

// Module 17989 (showEmojiOverflowActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    onClose() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(17990, dependencyMap.paths), "EmojiOverflowActionSheet", obj2);
};
