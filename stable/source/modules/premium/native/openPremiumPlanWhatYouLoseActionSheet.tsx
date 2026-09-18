// Module ID: 13337
// Function ID: 13338
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4527, 13338, 1896, 2]
// Exports: default

// Module 13337 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13338, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
