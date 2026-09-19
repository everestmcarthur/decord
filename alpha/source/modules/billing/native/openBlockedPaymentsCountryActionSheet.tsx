// Module ID: 11694
// Function ID: 11695
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4723, 11695, 1980, 2]
// Exports: default

// Module 11694 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11695, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
