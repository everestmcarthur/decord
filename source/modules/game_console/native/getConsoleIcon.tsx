// Module ID: 9556
// Function ID: 9557
// Name: getConsoleIcon
// Dependencies: [1074, 4628, 9535, 9557, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9556 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4628 */;
import _modDef9535 from "module_9535" /* 9535 */;
import _modDef9557 from "module_9557" /* 9557 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9535, [PLAYSTATION]: _modDef9557, [PLAYSTATION_STAGING]: _modDef9557 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9535;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9557;
    }
  }
  return tmp2;
};
