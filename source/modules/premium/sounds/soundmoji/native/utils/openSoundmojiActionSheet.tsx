// Module ID: 12084
// Function ID: 12085
// Name: openSoundmojiActionSheet
// Dependencies: [5105, 4607, 12085, 1897, 2]
// Exports: default

// Module 12084 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12085, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
