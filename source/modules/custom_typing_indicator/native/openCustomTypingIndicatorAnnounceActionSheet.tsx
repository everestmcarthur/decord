// Module ID: 12063
// Function ID: 12064
// Name: openCustomTypingIndicatorAnnounceActionSheet
// Dependencies: [4574, 12064, 1896, 2]
// Exports: openCustomTypingIndicatorAnnounceActionSheet

// Module 12063 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12064, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, {
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  });
};
