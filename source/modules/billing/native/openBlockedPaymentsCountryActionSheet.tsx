// Module ID: 11505
// Function ID: 11506
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4572, 11506, 1896, 2]
// Exports: default

// Module 11505 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11506, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
