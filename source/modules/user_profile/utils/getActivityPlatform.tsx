// Module ID: 13109
// Function ID: 13110
// Name: getActivityPlatform
// Dependencies: [1074, 13108, 10980, 5334, 8430, 13095, 13096, 13110, 13111, 2]
// Exports: default

// Module 13109 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13108 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const items = [, , , ];
({ LEAGUE_OF_LEGENDS: arr[0], ROBLOX: arr[1], TWITCH: arr[2], YOUTUBE: arr[3] } = PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatform.tsx");

export default function getActivityPlatform(session_id) {
  const tmp3 = parseProviderRouteHeadlessSessionIdDefault(session_id.session_id);
  if (null != tmp3) {
    return tmp3;
  } else if (tmp(10980)(session_id)) {
    return tmp(5334).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8430)(session_id)) {
    return tmp(5334).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13095)(session_id)) {
    return tmp(5334).get(PlatformTypes.XBOX);
  } else if (tmp(13096)(session_id)) {
    return tmp(5334).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13110)(session_id)) {
      if (!tmp(13111)(session_id)) {
        const found = tmp(5334).find((name) => name.name === session_id.name);
        let tmp5 = null;
        if (null != found) {
          tmp5 = null;
          if (set.has(found.type)) {
            tmp5 = found;
          }
        }
        return tmp5;
      }
    }
    return tmp(5334).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
