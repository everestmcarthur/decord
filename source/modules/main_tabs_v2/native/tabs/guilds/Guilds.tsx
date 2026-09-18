// Module ID: 16270
// Function ID: 16271
// Name: guilds/Guilds
// Dependencies: [19, 11338, 21, 16271, 4575, 11730, 4432, 15305, 16272, 16620, 15389, 2]

// Module 16270 (guilds/Guilds)
import native from "native" /* 4432 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4575 */;
import QuestsEligibility from "QuestsEligibility" /* 11730 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15305 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16271 */;
import MainChannelsDefault from "MainChannels" /* 16272 */;
import YouBarDefault from "YouBar" /* 16620 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15389);
require = fn;
const YouBarNavigatorScreens = fn(11338).YouBarNavigatorScreens;
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
