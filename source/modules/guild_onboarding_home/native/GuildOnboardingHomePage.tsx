// Module ID: 16639
// Function ID: 16640
// Name: GuildOnboardingHomePage
// Dependencies: [19, 4521, 4792, 4793, 1074, 21, 4341, 504, 7275, 12354, 1242, 4785, 5570, 16640, 16641, 16646, 16650, 16651, 16654, 7274, 2]
// Exports: default

// Module 16639 (GuildOnboardingHomePage)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4785 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5570 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12354 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4521 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4792 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4793 */;

require = fn;
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const sharedValue = guildId(4341).useSharedValue(-999);
  let obj = guildId(4341);
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getSettings(guildId));
  let tmp4 = stateFromStores;
  const tmp5 = stateFromStores(7275)(guildId);
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
    const items3 = [closure_9(tmp4(16641), obj4), ];
    if (tmp5) {
      let obj5 = { children: null };
      const obj6 = { guildId };
      const items4 = [tmp12(tmp4(16646), obj6), , ];
      const obj7 = { guildId };
      items4[1] = tmp12(tmp4(16650), obj7);
      tmp4 = tmp4(16651);
      const obj8 = { guildId };
      tmp = tmp12(tmp4, obj8);
      items4[2] = tmp;
      obj5.children = items4;
      let tmp12Result = tmp10(closure_10, obj5);
    } else {
      const obj9 = { guildId };
      tmp12Result = tmp12(tmp4(16654), obj9);
    }
    items3[1] = tmp12Result;
    obj3.children = items3;
    closure_11(tmp4(16640), obj3);
    const tmp4Result = tmp4(16640);
  }
}
const NO_SETTINGS = fn(4792).NO_SETTINGS;
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
