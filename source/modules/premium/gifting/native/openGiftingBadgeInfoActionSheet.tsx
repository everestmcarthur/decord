// Module ID: 10880
// Function ID: 10881
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4606, 10881, 1897, 2]
// Exports: default

// Module 10880 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10881, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
