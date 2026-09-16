// Module ID: 12075
// Function ID: 12076
// Name: openSoundmojiActionSheet
// Dependencies: [5102, 4605, 12076, 1897, 2]
// Exports: default

// Module 12075 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12076, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
