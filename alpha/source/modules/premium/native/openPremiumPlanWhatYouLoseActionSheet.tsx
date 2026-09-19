// Module ID: 13640
// Function ID: 13641
// Name: openPremiumPlanWhatYouLoseActionSheet
// Dependencies: [4723, 13641, 1980, 2]
// Exports: default

// Module 13640 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13641, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};
