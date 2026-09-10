// Module ID: 16584
// Function ID: 16585
// Name: GuildOnboardingHomePage
// Dependencies: [19, 4490, 4761, 4762, 1074, 21, 4310, 504, 7237, 12314, 1242, 4754, 5534, 16585, 16586, 16591, 16595, 16596, 16599, 7236, 2]
// Exports: default

// Module 16584 (GuildOnboardingHomePage)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4754 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5534 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12314 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4490 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4761 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4762 */;

require = fn;
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const sharedValue = guildId(4310).useSharedValue(-999);
  let obj = guildId(4310);
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getSettings(guildId));
  let tmp4 = stateFromStores;
  const tmp5 = stateFromStores(7237)(guildId);
  let tmp6 = !tmp5;
  if (!tmp5) {
    let num;
    if (stateFromStores != null) {
      let resourceChannels = stateFromStores.resourceChannels;
      if (resourceChannels != null) {
        num = resourceChannels.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    tmp6 = 0 === num;
  }
  dependencyMap = tmp6;
  const items1 = [guildId, stateFromStores, tmp6];
  const effect = noop.useEffect(() => {
    if (stateFromStores === NO_SETTINGS) {
      const guildHomeSettings = GuildOnboardingHomeActionCreators.fetchGuildHomeSettings(guildId);
    } else if (null != tmp) {
      const obj = {};
      const obj3 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = tmp.newMemberActions;
      let num;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      obj.num_member_actions = num;
      let completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
      if (completedActions == null) {
        completedActions = {};
      }
      obj.num_member_actions_completed = Object.keys(completedActions).length;
      const resourceChannels = tmp.resourceChannels;
      let num2;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.num_resource_channels = num2;
      obj3.track(AnalyticEvents.SERVER_GUIDE_VIEWED, obj);
    }
  }, items1);
  const items2 = [guildId, tmp6, stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = stateFromStores !== NO_SETTINGS;
    }
    if (tmp) {
      const result = GuildActionCreatorsDefault.escapeToDefaultChannel(guildId);
    }
  }, items2);
  if (tmp6) {
    return null;
  } else {
    let obj3 = { guildId, scrollValue: sharedValue, children: null };
    const obj4 = { guildId, hideDescription: tmp5 };
    const items3 = [closure_9(tmp4(16586), obj4), ];
    if (tmp5) {
      let obj5 = { children: null };
      const obj6 = { guildId };
      const items4 = [tmp12(tmp4(16591), obj6), , ];
      const obj7 = { guildId };
      items4[1] = tmp12(tmp4(16595), obj7);
      tmp4 = tmp4(16596);
      const obj8 = { guildId };
      tmp = tmp12(tmp4, obj8);
      items4[2] = tmp;
      obj5.children = items4;
      let tmp12Result = tmp10(closure_10, obj5);
    } else {
      const obj9 = { guildId };
      tmp12Result = tmp12(tmp4(16599), obj9);
    }
    items3[1] = tmp12Result;
    obj3.children = items3;
    closure_11(tmp4(16585), obj3);
    const tmp4Result = tmp4(16585);
  }
}
const NO_SETTINGS = fn(4761).NO_SETTINGS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  guildId = guildId.guildId;
  let canSeeOnboardingHome;
  const items = [ExperimentStore];
  const stateFromStores = guildId(canSeeOnboardingHome[7]).useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj = guildId(canSeeOnboardingHome[7]);
  canSeeOnboardingHome = guildId(canSeeOnboardingHome[19]).useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const result = GuildActionCreatorsDefault.escapeToDefaultChannel(guildId);
      }
    }
  }, items1);
  return closure_9(GuildOnboardingHomePage, { guildId });
};
