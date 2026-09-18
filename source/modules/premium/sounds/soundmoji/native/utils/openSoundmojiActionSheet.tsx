// Module ID: 12175
// Function ID: 12176
// Name: openSoundmojiActionSheet
// Dependencies: [5187, 4689, 12176, 1897, 2]
// Exports: default

// Module 12175 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12176, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
