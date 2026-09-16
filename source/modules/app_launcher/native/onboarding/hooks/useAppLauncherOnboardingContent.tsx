// Module ID: 12179
// Function ID: 12180
// Name: useAppLauncherOnboardingContent
// Dependencies: [32, 9434, 1958, 1955, 4458, 1944, 504, 12180, 12185, 7498, 2]
// Exports: default

// Module 12179 (useAppLauncherOnboardingContent)
import useCanShowAppLauncherOnboardingDefault from "useCanShowAppLauncherOnboarding" /* 12185 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 9434 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = fn;
const constants = fn(1955).DismissibleContentGroupName;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  let items = [];
  let obj = { channel: null };
  const items1 = [ChannelStore];
  obj.channel = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp3 = useCanShowAppLauncherOnboardingDefault({ channelId });
  if (tmp3.canShowBotsBanner) {
    items.push(tmp(1944).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp3.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(1944).DismissibleContent;
    if ((function useHasUsedActivities(channel) {
      channel = channel.channel;
      let result = channelId(4458).useIsDismissibleContentDismissed_UNSAFE(channelId(1944).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const obj = channelId(4458);
      const tmp = channelId;
      const result1 = channelId(4458).useIsDismissibleContentDismissed_UNSAFE(channelId(1944).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(4458);
      const items = [ApplicationFrecencyStore];
      const stateFromStores = channelId(504).useStateFromStores(items, () => applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest());
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj3 = channelId(504);
      const obj4 = { guildId: guild_id, fetchesShelf: null };
      if (result) {
        result = result1;
      }
      obj4.fetchesShelf = !result;
      const activityApplications = tmp(12180).useActivityApplications(obj4);
      let flag = false;
      for (const item10042 of activityApplications) {
        if (null != stateFromStores.getEntry(item10042.id)) {
          flag = true;
          obj7.return();
          break;
        }
        let obj5 = { hasUsedActivities: flag };
        return obj5;
      }
    })(obj).hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  let obj2 = channelId(504);
  let tmp7 = _slicedToArray(channelId(7498).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  return { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
};
