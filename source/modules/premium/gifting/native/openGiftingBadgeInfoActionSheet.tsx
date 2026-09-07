// Module ID: 10752
// Function ID: 10753
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: [4527, 10753, 1896, 2]
// Exports: default

// Module 10752 (openGiftingBadgeInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10753, dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
