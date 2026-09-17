// Module ID: 10899
// Function ID: 10900
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4607, 10900, 1897, 2]
// Exports: default

// Module 10899 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10900, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
