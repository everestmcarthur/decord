// Module ID: 11937
// Function ID: 11938
// Name: openSoundmojiActionSheet
// Dependencies: [5017, 4527, 11938, 1896, 2]
// Exports: default

// Module 11937 (openSoundmojiActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11938, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  }
};
