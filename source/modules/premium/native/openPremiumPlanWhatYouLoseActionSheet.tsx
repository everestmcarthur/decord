// Module ID: 13463
// Function ID: 13464
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4603, 13464, 1896, 2]
// Exports: default

// Module 13463 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13464, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
