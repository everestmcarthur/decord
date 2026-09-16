// Module ID: 13163
// Function ID: 13164
// Name: getActivityPlatform
// Dependencies: [1074, 13162, 11037, 5369, 8474, 13149, 13150, 13164, 13165, 2]
// Exports: default

// Module 13163 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13162 */;
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
  } else if (tmp(11037)(session_id)) {
    return tmp(5369).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8474)(session_id)) {
    return tmp(5369).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13149)(session_id)) {
    return tmp(5369).get(PlatformTypes.XBOX);
  } else if (tmp(13150)(session_id)) {
    return tmp(5369).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13164)(session_id)) {
      if (!tmp(13165)(session_id)) {
        const found = tmp(5369).find((name) => name.name === session_id.name);
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
    return tmp(5369).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
