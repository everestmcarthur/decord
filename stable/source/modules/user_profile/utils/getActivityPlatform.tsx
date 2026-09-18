// Module ID: 13020
// Function ID: 13021
// Name: getActivityPlatform
// Dependencies: [1074, 13019, 10896, 5283, 8345, 13006, 13007, 13021, 13022, 2]
// Exports: default

// Module 13020 (getActivityPlatform)
import Constants from "Constants" /* 1074 */;
import parseProviderRouteHeadlessSessionIdDefault from "parseProviderRouteHeadlessSessionId" /* 13019 */;
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
  } else if (tmp(10896)(session_id)) {
    return tmp(5283).get(PlatformTypes.SPOTIFY);
  } else if (tmp(8345)(session_id)) {
    return tmp(5283).get(PlatformTypes.CRUNCHYROLL);
  } else if (tmp(13006)(session_id)) {
    return tmp(5283).get(PlatformTypes.XBOX);
  } else if (tmp(13007)(session_id)) {
    return tmp(5283).get(PlatformTypes.PLAYSTATION);
  } else {
    if (!tmp(13021)(session_id)) {
      if (!tmp(13022)(session_id)) {
        const found = tmp(5283).find((name) => name.name === session_id.name);
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
    return tmp(5283).get(PlatformTypes.META_QUEST_OR_HORIZON);
  }
};
