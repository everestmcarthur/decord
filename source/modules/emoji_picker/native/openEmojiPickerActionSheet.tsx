// Module ID: 11218
// Function ID: 11219
// Name: openEmojiPickerActionSheet
// Dependencies: [1374, 10424, 4574, 11219, 1896, 2]
// Exports: openEmojiPickerActionSheet

// Module 11218 (openEmojiPickerActionSheet)
import EmojiConstants from "EmojiConstants" /* 1374 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10424 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
let result = size.fileFinishedImporting("modules/emoji_picker/native/openEmojiPickerActionSheet.tsx");

export const EMOJI_PICKER_ACTION_SHEET_KEY = "EmojiPickerActionSheet";
export const openEmojiPickerActionSheet = function openEmojiPickerActionSheet(arg0, stack) {
  const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.EmojiPickerActionSheetOpened);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11219, dependencyMap.paths), EmojiPickerActionSheet, arg0, stack);
};
