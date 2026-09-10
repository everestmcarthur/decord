// Module ID: 11963
// Function ID: 11964
// Name: openSoundmojiActionSheet
// Dependencies: [5031, 4541, 11964, 1896, 2]
// Exports: default

// Module 11963 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11964, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
