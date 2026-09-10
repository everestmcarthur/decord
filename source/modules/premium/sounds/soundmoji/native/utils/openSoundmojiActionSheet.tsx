// Module ID: 12003
// Function ID: 12004
// Name: openSoundmojiActionSheet
// Dependencies: [5067, 4572, 12004, 1896, 2]
// Exports: default

// Module 12003 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12004, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
