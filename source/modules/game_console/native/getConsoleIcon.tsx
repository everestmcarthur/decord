// Module ID: 9617
// Function ID: 9618
// Name: getConsoleIcon
// Dependencies: [1074, 4661, 9596, 9618, 2]
// Exports: default, getConsoleIconForVoicePlatform

// Module 9617 (getConsoleIcon)
import Constants from "Constants" /* 1074 */;
import CallConstants from "CallConstants" /* 4661 */;
import _modDef9596 from "module_9596" /* 9596 */;
import _modDef9618 from "module_9618" /* 9618 */;
import size from "module_2" /* 2 */;

const VoicePlatforms = CallConstants.VoicePlatforms;
const obj = { [XBOX]: _modDef9596, [PLAYSTATION]: _modDef9618, [PLAYSTATION_STAGING]: _modDef9618 };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleIcon.tsx");

export default function getConsoleIcon(arg0) {
  return obj[arg0];
};
export const getConsoleIconForVoicePlatform = function getConsoleIconForVoicePlatform(voicePlatform) {
  if (voicePlatform === VoicePlatforms.XBOX) {
    let tmp2 = _modDef9596;
  } else {
    tmp2 = null;
    if (voicePlatform === tmp.PLAYSTATION) {
      tmp2 = _modDef9618;
    }
  }
  return tmp2;
};
