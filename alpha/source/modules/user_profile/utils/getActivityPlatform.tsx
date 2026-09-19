// Module ID: 13307
// Function ID: 13308
// Name: getActivityPlatform
// Dependencies: [1074, 13306, 11152, 5495, 8614, 13293, 13294, 13308, 13309, 2]
// Exports: default

// Module 13307 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13306 */;
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
  } else if (tmp(11152)(session_id)) {
    return tmp(5495).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8614)(session_id)) {
    return tmp(5495).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13293)(session_id)) {
    return tmp(5495).get(PlatformTypes.XBOX);
  } else if (tmp(13294)(session_id)) {
    return tmp(5495).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13308)(session_id)) {
      if (!tmp(13309)(session_id)) {
        const found = tmp(5495).find((name) => name.name === session_id.name);
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
    return tmp(5495).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
