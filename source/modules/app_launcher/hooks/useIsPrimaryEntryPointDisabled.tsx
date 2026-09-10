// Module ID: 12173
// Function ID: 12174
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [1918, 4212, 1085, 504, 9614, 12087, 9578, 9442, 1115, 1114, 2]
// Exports: default

// Module 12173 (useIsPrimaryEntryPointDisabled)
import getPlatformDefault from "getPlatform" /* 9442 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;
import PermissionStore from "PermissionStore" /* 4212 */;

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  ({ context, application, activityAction } = arg0);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel));
  const obj = channel(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(9614).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(12087).ActivityAction.LEAVE !== activityAction) {
    if (tmp2(12087).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp2(9614).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result = tmp2(9578);
        }
      }
    } else {
      flag = false;
      if (tmp2(12087).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          flag = false;
          if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result3 = tmp2(9578);
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== channel(12087).ActivityAction.LEAVE) {
    const tmp10 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatformDefault;
    tmp2(1115);
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp14)) {
        const intl = tmp2(1114).intl;
        reason = intl.string(tmp2(1114).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1114).intl;
      reason = intl2.string(tmp2(1114).t.ddSR3v);
      disabled = true;
    }
  }
  let tmp16 = disabled;
  if (disabled) {
    tmp16 = null == reason;
  }
  if (tmp16) {
    const intl3 = tmp2(1114).intl;
    reason = intl3.string(tmp2(1114).t.f41E1g);
  }
  return { disabled, reason };
};
