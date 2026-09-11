// Module ID: 13794
// Function ID: 13795
// Name: showVoiceChannelBlockedUserWarning
// Dependencies: [1895, 13789, 13792, 1093, 4573, 13795, 1896, 1250, 2]
// Exports: showVoiceChannelBlockedUserWarning

// Module 13794 (showVoiceChannelBlockedUserWarning)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
const SharedSpacesWarningStore = fn(13789);
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = fn(13792).VoiceChannelWarningSurfaces;
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  const state = AppStateStore.getState();
  if (state === ConstantsIOS.AppStates.ACTIVE) {
    hasOwnProperty();
    const obj2 = { channelId, blockedUserId: items1, impressionName: null, impressionProperties: null };
    const obj = ActionSheetActionCreatorsDefault;
    obj2.impressionName = tmp2(1250).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
    const obj3 = { channel_id: channelId, blocked_user_ids: null, warning_surface: null };
    const items = [items1];
    obj3.blocked_user_ids = items;
    obj3.warning_surface = constants.POST_JOIN_SHEET;
    obj2.impressionProperties = obj3;
    obj.openLazy(tmp2(1896)(13795, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj2);
    const tmp11 = tmp2(1896)(13795, dependencyMap.paths);
  } else {
    React4();
  }
};
