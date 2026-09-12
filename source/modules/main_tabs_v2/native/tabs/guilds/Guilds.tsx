// Module ID: 16108
// Function ID: 16109
// Name: guilds/Guilds
// Dependencies: [19, 11218, 21, 16109, 4490, 11617, 4347, 15179, 16110, 16458, 15263, 2]

// Module 16108 (guilds/Guilds)
import native from "native" /* 4347 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4490 */;
import QuestsEligibility from "QuestsEligibility" /* 11617 */;
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext" /* 15179 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16109 */;
import MainChannelsDefault from "MainChannels" /* 16110 */;
import YouBarDefault from "YouBar" /* 16458 */;
import noop from "module_19" /* 19 */;

const QuestDockDefault = tmp3(15263);
require = fn;
const YouBarNavigatorScreens = fn(11218).YouBarNavigatorScreens;
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
