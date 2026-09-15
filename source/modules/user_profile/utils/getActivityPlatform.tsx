// Module ID: 13152
// Function ID: 13153
// Name: getActivityPlatform
// Dependencies: [1074, 13151, 11024, 5368, 8465, 13138, 13139, 13153, 13154, 2]
// Exports: default

// Module 13152 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13151 */;
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
  } else if (tmp(11024)(session_id)) {
    return tmp(5368).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8465)(session_id)) {
    return tmp(5368).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13138)(session_id)) {
    return tmp(5368).get(PlatformTypes.XBOX);
  } else if (tmp(13139)(session_id)) {
    return tmp(5368).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13153)(session_id)) {
      if (!tmp(13154)(session_id)) {
        const found = tmp(5368).find((name) => name.name === session_id.name);
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
    return tmp(5368).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
