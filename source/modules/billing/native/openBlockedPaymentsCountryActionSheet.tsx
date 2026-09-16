// Module ID: 11579
// Function ID: 11580
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4605, 11580, 1897, 2]
// Exports: default

// Module 11579 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11580, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
