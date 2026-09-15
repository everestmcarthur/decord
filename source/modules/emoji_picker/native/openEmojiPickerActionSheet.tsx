// Module ID: 11260
// Function ID: 11261
// Name: openEmojiPickerActionSheet
// Dependencies: [1375, 10465, 4606, 11261, 1897, 2]
// Exports: openEmojiPickerActionSheet

// Module 11260 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10465 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11261, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
