// Module ID: 16084
// Function ID: 16085
// Name: guilds/Guilds
// Dependencies: [19, 11181, 21, 16085, 4460, 11580, 4317, 15157, 16086, 16434, 15241, 2]

// Module 16084 (guilds/Guilds)
import native from "native" /* 4317 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4460 */;
import QuestsEligibility from "QuestsEligibility" /* 11580 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15157 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16085 */;
import MainChannelsDefault from "MainChannels" /* 16086 */;
import YouBarDefault from "YouBar" /* 16434 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15241);
require = fn;
const YouBarNavigatorScreens = fn(11181).YouBarNavigatorScreens;
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
