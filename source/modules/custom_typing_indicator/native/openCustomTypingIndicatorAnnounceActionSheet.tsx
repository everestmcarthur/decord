// Module ID: 12061
// Function ID: 12062
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4573, 12062, 1896, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 12061 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12062, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, {
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  });
};
