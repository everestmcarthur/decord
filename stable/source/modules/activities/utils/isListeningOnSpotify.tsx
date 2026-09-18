// Module ID: 10896
// Function ID: 10897
// Name: isListeningOnSpotify
// Dependencies: [1074, 8341, 5283, 2]
// Exports: default

// Module 10896 (isListeningOnSpotify)
import PlatformsDefault from "Platforms" /* 5283 */;
import SpotifyConstants from "SpotifyConstants" /* 8341 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityTypes: c2, PlatformTypes: c3 } = Constants);
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/activities/utils/isListeningOnSpotify.tsx");

export default function isListeningOnSpotify(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === constants.LISTENING;
  }
  if (tmp) {
    tmp = type.name === PlatformsDefault.get(constants2.SPOTIFY).name;
  }
  if (tmp) {
    tmp = null != type.party;
  }
  if (tmp) {
    tmp = null != type.party.id;
  }
  if (tmp) {
    tmp = isSpotifyParty(type.party.id);
  }
  return tmp;
};
