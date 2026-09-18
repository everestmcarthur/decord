// Module ID: 13262
// Function ID: 13263
// Name: getActivityPlatform
// Dependencies: [1074, 13261, 11139, 5453, 8576, 13248, 13249, 13263, 13264, 2]
// Exports: default

// Module 13262 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13261 */;
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
  } else if (tmp(11139)(session_id)) {
    return tmp(5453).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8576)(session_id)) {
    return tmp(5453).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13248)(session_id)) {
    return tmp(5453).get(PlatformTypes.XBOX);
  } else if (tmp(13249)(session_id)) {
    return tmp(5453).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13263)(session_id)) {
      if (!tmp(13264)(session_id)) {
        const found = tmp(5453).find((name) => name.name === session_id.name);
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
    return tmp(5453).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
