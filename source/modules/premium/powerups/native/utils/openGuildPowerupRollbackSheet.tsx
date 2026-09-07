// Module ID: 12518
// Function ID: 12519
// Name: openGuildPowerupRollbackSheet
// Dependencies: [4527, 12519, 1896, 2]
// Exports: default

// Module 12518 (openGuildPowerupRollbackSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupRollbackSheet.tsx");

export default function openGuildPowerupRollbackSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12519, dependencyMap.paths), GUILD_POWERUP_ROLLBACK_SHEET_KEY, arg0);
};
export const GUILD_POWERUP_ROLLBACK_SHEET_KEY = "GUILD_POWERUP_ROLLBACK_SHEET_KEY";
