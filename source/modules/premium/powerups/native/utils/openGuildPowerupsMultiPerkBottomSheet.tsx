// Module ID: 12550
// Function ID: 12551
// Name: openGuildPowerupsMultiPerkBottomSheet
// Dependencies: [4527, 12551, 1896, 12521, 2]
// Exports: default

// Module 12550 (openGuildPowerupsMultiPerkBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12521 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsMultiPerkBottomSheet.tsx");

export default function openGuildPowerupsMultiPerkBottomSheet(arg0) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(12551, dependencyMap.paths), openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY, arg0);
};
