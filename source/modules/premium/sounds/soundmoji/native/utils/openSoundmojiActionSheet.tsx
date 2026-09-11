// Module ID: 12028
// Function ID: 12029
// Name: openSoundmojiActionSheet
// Dependencies: [5069, 4574, 12029, 1896, 2]
// Exports: default

// Module 12028 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12029, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
