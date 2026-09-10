// Module ID: 16095
// Function ID: 16096
// Name: guilds/Guilds
// Dependencies: [19, 11156, 21, 16096, 4458, 11556, 4315, 15178, 16097, 16445, 15262, 2]

// Module 16095 (guilds/Guilds)
import native from "native" /* 4315 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4458 */;
import QuestsEligibility from "QuestsEligibility" /* 11556 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15178 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16096 */;
import MainChannelsDefault from "MainChannels" /* 16097 */;
import YouBarDefault from "YouBar" /* 16445 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15262);
require = fn;
const YouBarNavigatorScreens = fn(11156).YouBarNavigatorScreens;
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
