// Module ID: 11141
// Function ID: 11142
// Name: UserProfileVoiceActivityIcon
// Dependencies: [19, 4361, 1085, 21, 504, 8085, 5231, 5265, 5266, 5268, 5267, 5270, 2]
// Exports: default

// Module 11141 (UserProfileVoiceActivityIcon)
import isRoleRequiredDefault from "isRoleRequired" /* 5231 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4361 */;

const require = fn;
const Permissions = fn(1085).Permissions;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = isRoleRequiredDefault(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          const obj2 = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(tmp2(5265).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const obj3 = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(5266).StageIcon, {});
      } else if (channel.isNSFW()) {
        const obj4 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp2(5268).VoiceWarningIcon, obj4);
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(5267).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5270).VoiceNormalIcon;
        }
        const obj5 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj5);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(8085).PhoneCallIcon, {});
};
