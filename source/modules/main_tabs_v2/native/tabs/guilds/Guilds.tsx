// Module ID: 16143
// Function ID: 16144
// Name: guilds/Guilds
// Dependencies: [19, 11237, 21, 16144, 4491, 11630, 4348, 15206, 16145, 16493, 15290, 2]

// Module 16143 (guilds/Guilds)
import native from "native" /* 4348 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4491 */;
import QuestsEligibility from "QuestsEligibility" /* 11630 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15206 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16144 */;
import MainChannelsDefault from "MainChannels" /* 16145 */;
import YouBarDefault from "YouBar" /* 16493 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15290);
require = fn;
const YouBarNavigatorScreens = fn(11237).YouBarNavigatorScreens;
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
