// Module ID: 10836
// Function ID: 10837
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4573, 10837, 1896, 2]
// Exports: default

// Module 10836 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10837, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
