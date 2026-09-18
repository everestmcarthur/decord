// Module ID: 10993
// Function ID: 10994
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4689, 10994, 1897, 2]
// Exports: default

// Module 10993 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10994, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
