// Module ID: 11685
// Function ID: 11686
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4689, 11686, 1897, 2]
// Exports: default

// Module 11685 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11686, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
