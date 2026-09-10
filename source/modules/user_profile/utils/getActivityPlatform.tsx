// Module ID: 13046
// Function ID: 13047
// Name: getActivityPlatform
// Dependencies: [1074, 13045, 10923, 5297, 8372, 13032, 13033, 13047, 13048, 2]
// Exports: default

// Module 13046 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13045 */;
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
  } else if (tmp(10923)(session_id)) {
    return tmp(5297).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8372)(session_id)) {
    return tmp(5297).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13032)(session_id)) {
    return tmp(5297).get(PlatformTypes.XBOX);
  } else if (tmp(13033)(session_id)) {
    return tmp(5297).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13047)(session_id)) {
      if (!tmp(13048)(session_id)) {
        const found = tmp(5297).find((name) => name.name === session_id.name);
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
    return tmp(5297).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
