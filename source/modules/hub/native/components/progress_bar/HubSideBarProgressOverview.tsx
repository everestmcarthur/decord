// Module ID: 16343
// Function ID: 16344
// Name: HubSideBarProgressOverview
// Dependencies: [19, 9971, 21, 12812, 1115, 12617, 14081, 4605, 12816, 1897, 2]
// Exports: default

// Module 16343 (HubSideBarProgressOverview)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubProgressBarConstants = fn(9971);
({ HUB_PROGRESS_ACTION_SHEET_ID: c3, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_4 } = HubProgressBarConstants);
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx");

export default function HubSidebarProgressOverview(guild) {
  guild = guild.guild;
  const hubProgressBarCompletedSteps = guild(12812).useHubProgressBarCompletedSteps(guild);
  const obj = guild(12812);
  const nextHubProgressStep = guild(12812).getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    const size = hubProgressBarCompletedSteps.size;
    const hubProgressTitleForStep = tmp(12812).getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_4) {
      const intl2 = tmp(1115).intl;
      const obj3 = { number: null, total: null };
      const _HermesInternal = HermesInternal;
      obj3.number = "" + size;
      obj3.total = tmp11;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t["9j7xDu"], obj3);
    } else {
      const intl = tmp(1115).intl;
      formatToPlainStringResult = intl.string(tmp(1115).t["+Gyklt"]);
    }
    const _Math = Math;
    const bound = Math.max(tmp(12617).MIN_PROGRESS_PERCENT, 100 * size / tmp11);
    const obj4 = {
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12816, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    };
    return jsx(tmp(14081).GuildProgressOverviewView, {
      onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12816, dependencyMap.paths), React3, { guild, analyticsSource: "Channels Sidebar" });
        },
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      percentComplete: bound
    });
  }
  const obj2 = guild(12812);
};
