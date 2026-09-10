// Module ID: 13360
// Function ID: 13361
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4541, 13361, 1896, 2]
// Exports: default

// Module 13360 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13361, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
