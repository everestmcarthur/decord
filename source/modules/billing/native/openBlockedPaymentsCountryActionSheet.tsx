// Module ID: 11587
// Function ID: 11588
// Name: openBlockedPaymentsCountryActionSheet
// Dependencies: [4607, 11588, 1897, 2]
// Exports: default

// Module 11587 (openBlockedPaymentsCountryActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/native/openBlockedPaymentsCountryActionSheet.tsx");

export default function openBlockedPaymentsCountryActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11588, dependencyMap.paths), "BlockedPaymentsCountryActionSheet");
};
