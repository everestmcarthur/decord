// Module ID: 13488
// Function ID: 13489
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4607, 13489, 1897, 2]
// Exports: default

// Module 13488 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13489, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
