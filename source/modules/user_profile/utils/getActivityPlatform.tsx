// Module ID: 13171
// Function ID: 13172
// Name: getActivityPlatform
// Dependencies: [1074, 13170, 11045, 5371, 8493, 13157, 13158, 13172, 13173, 2]
// Exports: default

// Module 13171 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13170 */;
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
  } else if (tmp(11045)(session_id)) {
    return tmp(5371).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8493)(session_id)) {
    return tmp(5371).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13157)(session_id)) {
    return tmp(5371).get(PlatformTypes.XBOX);
  } else if (tmp(13158)(session_id)) {
    return tmp(5371).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13172)(session_id)) {
      if (!tmp(13173)(session_id)) {
        const found = tmp(5371).find((name) => name.name === session_id.name);
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
    return tmp(5371).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
