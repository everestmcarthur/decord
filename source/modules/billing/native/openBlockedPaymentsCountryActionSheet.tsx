// Module ID: 11527
// Function ID: 11528
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4573, 11528, 1896, 2]
// Exports: default

// Module 11527 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11528, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
