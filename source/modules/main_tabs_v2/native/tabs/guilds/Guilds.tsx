// Module ID: 16046
// Function ID: 16047
// Name: guilds/Guilds
// Dependencies: [19, 11116, 21, 16047, 4427, 11516, 4284, 15129, 16048, 16396, 15213, 2]

// Module 16046 (guilds/Guilds)
import native from "native" /* 4284 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4427 */;
import QuestsEligibility from "QuestsEligibility" /* 11516 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15129 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16047 */;
import MainChannelsDefault from "MainChannels" /* 16048 */;
import YouBarDefault from "YouBar" /* 16396 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15213);
require = fn;
const YouBarNavigatorScreens = fn(11116).YouBarNavigatorScreens;
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
