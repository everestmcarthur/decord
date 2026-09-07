// Module ID: 16016
// Function ID: 16017
// Dependencies: [19, 11089, 21, 16017, 4413, 11489, 4271, 15102, 16018, 16365, 15186, 2]

// Module 16016
import ManaContext from "ManaContext" /* 4271 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4413 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11489 */;
import QuestDockMode from "QuestDockMode" /* 15102 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 15186 */;
import trackTabPressed from "trackTabPressed" /* 16017 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 16018 */;
import _modDef16365 from "module_16365" /* 16365 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 11089 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = importAllResult.memo(function GuildsOnly() {
  let obj = trackTabPressed;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = getGuildThemeNameDefault();
  let isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef16365, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
