// Module ID: 13409
// Function ID: 13410
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4572, 13410, 1896, 2]
// Exports: default

// Module 13409 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13410, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
