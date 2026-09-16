// Module ID: 13480
// Function ID: 13481
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4605, 13481, 1897, 2]
// Exports: default

// Module 13480 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13481, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
