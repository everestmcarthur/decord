// Module ID: 16173
// Function ID: 16174
// Name: guilds/Guilds
// Dependencies: [19, 11245, 21, 16174, 4493, 11638, 4350, 15211, 16175, 16523, 15295, 2]

// Module 16173 (guilds/Guilds)
import native from "native" /* 4350 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4493 */;
import QuestsEligibility from "QuestsEligibility" /* 11638 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15211 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16174 */;
import MainChannelsDefault from "MainChannels" /* 16175 */;
import YouBarDefault from "YouBar" /* 16523 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15295);
require = fn;
const YouBarNavigatorScreens = fn(11245).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(function GuildsOnly() {
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp4 = useColorThemeBackgroundDefault();
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  const obj3 = { gradient: tmp4, children: null };
  const items = [React4(MainChannelsDefault, {}), React4(YouBarDefault, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj3.children = hasOwnProperty(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, { children: items });
  return React4(native.ThemeContextProvider, obj3);
}, () => true);
