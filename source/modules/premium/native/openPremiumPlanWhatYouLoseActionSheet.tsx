// Module ID: 13469
// Function ID: 13470
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4606, 13470, 1897, 2]
// Exports: default

// Module 13469 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13470, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
