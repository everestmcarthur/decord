// Module ID: 11438
// Function ID: 11439
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4527, 11439, 1896, 2]
// Exports: default

// Module 11438 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11439, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
