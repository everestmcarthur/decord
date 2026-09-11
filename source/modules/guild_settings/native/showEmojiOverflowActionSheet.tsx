// Module ID: 17650
// Function ID: 17651
// Name: showEmojiOverflowActionSheet
// Dependencies: [4574, 17651, 1896, 2]
// Exports: default

// Module 17650 (showEmojiOverflowActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
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
  obj.openLazy(asyncRequireImpl(17651, dependencyMap.paths), "EmojiOverflowActionSheet", obj2);
};
