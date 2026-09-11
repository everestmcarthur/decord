// Module ID: 13432
// Function ID: 13433
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4574, 13433, 1896, 2]
// Exports: default

// Module 13432 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13433, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
