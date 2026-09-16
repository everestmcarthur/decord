// Module ID: 10891
// Function ID: 10892
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4605, 10892, 1897, 2]
// Exports: default

// Module 10891 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10892, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
