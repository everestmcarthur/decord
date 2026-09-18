// Module ID: 9469
// Function ID: 9470
// Name: getConsoleIcon
// Dependencies: [1074, 4581, 9448, 9470, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9469 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4581 */;
import _modDef9448 from "module_9448" /* 9448 */;
import _modDef9470 from "module_9470" /* 9470 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9448, [PLAYSTATION]: _modDef9470, [PLAYSTATION_STAGING]: _modDef9470 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9448;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9470;
    }
  }
  return tmp2;
};
