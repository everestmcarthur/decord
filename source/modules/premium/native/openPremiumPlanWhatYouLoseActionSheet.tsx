// Module ID: 13464
// Function ID: 13465
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4603, 13465, 1896, 2]
// Exports: default

// Module 13464 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13465, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
