// Module ID: 11529
// Function ID: 11530
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4574, 11530, 1896, 2]
// Exports: default

// Module 11529 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11530, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
