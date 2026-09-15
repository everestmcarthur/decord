// Module ID: 11571
// Function ID: 11572
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4606, 11572, 1897, 2]
// Exports: default

// Module 11571 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11572, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
