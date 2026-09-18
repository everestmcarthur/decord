// Module ID: 13585
// Function ID: 13586
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4689, 13586, 1897, 2]
// Exports: default

// Module 13585 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13586, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
