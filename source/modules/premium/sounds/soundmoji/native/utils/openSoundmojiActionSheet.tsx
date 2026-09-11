// Module ID: 12026
// Function ID: 12027
// Name: openSoundmojiActionSheet
// Dependencies: [5068, 4573, 12027, 1896, 2]
// Exports: default

// Module 12026 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12027, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
