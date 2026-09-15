// Module ID: 16123
// Function ID: 16124
// Name: guilds/Guilds
// Dependencies: [19, 11223, 21, 16124, 4493, 11622, 4350, 15190, 16125, 16473, 15274, 2]

// Module 16123 (guilds/Guilds)
import native from "native" /* 4350 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4493 */;
import QuestsEligibility from "QuestsEligibility" /* 11622 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15190 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16124 */;
import MainChannelsDefault from "MainChannels" /* 16125 */;
import YouBarDefault from "YouBar" /* 16473 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15274);
require = fn;
const YouBarNavigatorScreens = fn(11223).YouBarNavigatorScreens;
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
