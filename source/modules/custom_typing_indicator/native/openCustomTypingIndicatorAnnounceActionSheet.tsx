// Module ID: 11972
// Function ID: 11973
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4527, 11973, 1896, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 11972 (openCustomTypingIndicatorAnnounceActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = set.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    markAsDismissed() {
      return callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(11973, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};
