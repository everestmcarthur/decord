// Module ID: 7495
// Function ID: 7496
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1373, 4573, 7496, 1896, 2]
// Exports: default

// Module 7495 (openPremiumPlanSelectionActionSheet)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7496, dependencyMap.paths), closure_3, arg0, arg1);
};
