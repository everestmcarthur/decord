// Module ID: 13430
// Function ID: 13431
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4573, 13431, 1896, 2]
// Exports: default

// Module 13430 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13431, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
