// Module ID: 7529
// Function ID: 7530
// Name: openPremiumPlanSelectionActionSheet
// Dependencies: [1374, 4606, 7530, 1897, 2]
// Exports: default

// Module 7529 (openPremiumPlanSelectionActionSheet)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7530, dependencyMap.paths), closure_3, arg0, arg1);
};
