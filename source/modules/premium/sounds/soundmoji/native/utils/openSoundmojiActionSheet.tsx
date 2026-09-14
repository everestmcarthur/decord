// Module ID: 12063
// Function ID: 12064
// Name: openSoundmojiActionSheet
// Dependencies: [5098, 4603, 12064, 1896, 2]
// Exports: default

// Module 12063 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12064, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
