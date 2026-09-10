// Module ID: 13086
// Function ID: 13087
// Name: getActivityPlatform
// Dependencies: [1074, 13085, 10961, 5333, 8409, 13072, 13073, 13087, 13088, 2]
// Exports: default

// Module 13086 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13085 */;
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
  } else if (tmp(10961)(session_id)) {
    return tmp(5333).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8409)(session_id)) {
    return tmp(5333).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13072)(session_id)) {
    return tmp(5333).get(PlatformTypes.XBOX);
  } else if (tmp(13073)(session_id)) {
    return tmp(5333).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13087)(session_id)) {
      if (!tmp(13088)(session_id)) {
        const found = tmp(5333).find((name) => name.name === session_id.name);
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
    return tmp(5333).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
