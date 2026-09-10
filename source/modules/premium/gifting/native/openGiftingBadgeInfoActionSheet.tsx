// Module ID: 10817
// Function ID: 10818
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4572, 10818, 1896, 2]
// Exports: default

// Module 10817 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10818, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
