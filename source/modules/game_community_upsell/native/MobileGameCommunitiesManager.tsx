// Module ID: 17505
// Function ID: 17506
// Name: _fetchGameCommunities
// Dependencies: [13715, 15623, 16268, 7118, 15624, 16269, 13718, 13716, 2]

// Module 17505 (_fetchGameCommunities)
import initializeDefault from "initialize" /* 7118 */;
import DetectableAppNames from "DetectableAppNames" /* 13716 */;
import GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT from "GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT" /* 13718 */;
import DETECTABLE_GAME_TO_APPLICATION_ID_MAP from "DETECTABLE_GAME_TO_APPLICATION_ID_MAP" /* 15624 */;
import fetchMobileGameCommunitiesAll from "fetchMobileGameCommunities" /* 16269 */;
import closure_3 from "initialize" /* 13715 */;
import closure_4 from "set" /* 15623 */;
import { MAX_DISPLAYED_UPSELL_GUILDS as closure_5 } from "MAX_DISPLAYED_UPSELL_GUILDS" /* 16268 */;

require = arg1;
initializeDefault;
class MobileGameCommunitiesManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOCAL_APP_DETECTION_COMPLETE(arg0) {
            return applyArgumentsResult.handleLocalAppDetectionComplete(arg0);
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.handlePostConnectionOpen();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = MobileGameCommunitiesManager.prototype;
prototype["_fetchGameCommunities"] = function _fetchGameCommunities(result) {
  const gameIdsForDetectedGames = DETECTABLE_GAME_TO_APPLICATION_ID_MAP.getGameIdsForDetectedGames(result);
  const timestamp = Date.now();
  const diff = timestamp - store.getLastFetchedAt();
  if (diff >= 86400000) {
    const dismissedGuildIds = store.getDismissedGuildIds();
    const _Array = Array;
    const mobileGameCommunities = fetchMobileGameCommunitiesAll.fetchMobileGameCommunities(gameIdsForDetectedGames, Array.from(dismissedGuildIds), closure_5);
    const obj3 = fetchMobileGameCommunitiesAll;
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const GameCommunityAddServerEntryExperiment = GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT.GameCommunityAddServerEntryExperiment;
  if (GameCommunityAddServerEntryExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
    if (0 === store.getLastFetchedAt()) {
      const _Object = Object;
      const values = Object.values(closure_3.getUserAgnosticState().apps);
      if (values.some((lastScannedAt) => {
        lastScannedAt = undefined;
        if (lastScannedAt != null) {
          lastScannedAt = lastScannedAt.lastScannedAt;
        }
        return null != lastScannedAt;
      })) {
        const obj = {};
        const ALL_DETECTABLE_APP_NAMES = DetectableAppNames.ALL_DETECTABLE_APP_NAMES;
        for (const item10021 of ALL_DETECTABLE_APP_NAMES) {
          let tmp6 = closure_3;
          obj[item10021] = closure_3.isAppInstalled(item10021);
          continue;
        }
        const self = this;
        const result = this._fetchGameCommunities(obj);
      }
    }
  }
};
prototype["handleLocalAppDetectionComplete"] = function handleLocalAppDetectionComplete(result) {
  const GameCommunityAddServerEntryExperiment = GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT.GameCommunityAddServerEntryExperiment;
  if (GameCommunityAddServerEntryExperiment.getConfig({ location: "MobileGameCommunitiesManager" }).enabled) {
    const self = this;
    result = this._fetchGameCommunities(result.result);
  }
};
const mobileGameCommunitiesManager = new MobileGameCommunitiesManager();
let result = require("set").fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesManager.tsx");

export default mobileGameCommunitiesManager;
