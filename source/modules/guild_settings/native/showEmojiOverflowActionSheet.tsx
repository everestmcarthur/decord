// Module ID: 17774
// Function ID: 17775
// Name: showEmojiOverflowActionSheet
// Dependencies: [4605, 17775, 1897, 2]
// Exports: default

// Module 17774 (showEmojiOverflowActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
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
  obj.openLazy(asyncRequireImpl(17775, dependencyMap.paths), "EmojiOverflowActionSheet", obj2);
};
