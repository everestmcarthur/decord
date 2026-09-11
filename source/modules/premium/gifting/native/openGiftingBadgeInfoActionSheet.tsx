// Module ID: 10838
// Function ID: 10839
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4574, 10839, 1896, 2]
// Exports: default

// Module 10838 (openGiftingBadgeInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10839, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
