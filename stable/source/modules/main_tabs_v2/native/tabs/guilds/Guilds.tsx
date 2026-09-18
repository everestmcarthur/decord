// Module ID: 16016
// Function ID: 16017
// Name: guilds/Guilds
// Dependencies: [19, 11089, 21, 16017, 4413, 11489, 4271, 15102, 16018, 16365, 15186, 2]

// Module 16016 (guilds/Guilds)
import native from "native" /* 4271 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4413 */;
import QuestsEligibility from "QuestsEligibility" /* 11489 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15102 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16017 */;
import MainChannelsDefault from "MainChannels" /* 16018 */;
import YouBarDefault from "YouBar" /* 16365 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15186);
require = fn;
const YouBarNavigatorScreens = fn(11089).YouBarNavigatorScreens;
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
