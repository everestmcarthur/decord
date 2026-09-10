// Module ID: 11465
// Function ID: 11466
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4541, 11466, 1896, 2]
// Exports: default

// Module 11465 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11466, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
