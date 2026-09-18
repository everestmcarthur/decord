// Module ID: 8626
// Function ID: 8627
// Name: StageChannelActionCreatorExtras
// Dependencies: [8627, 5584, 4689, 8629, 1897, 8828, 8856, 8859, 9319, 4931, 4929, 4925, 9704, 8409, 8858, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8626 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import StageVoicePanelExperiment from "StageVoicePanelExperiment" /* 4931 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8409 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8627 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8858 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5584 */;
import size from "module_2" /* 2 */;

const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8629, dependencyMap.paths), hasOwnProperty, { channel });
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8828, dependencyMap.paths), React4, { channelId });
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8856, dependencyMap.paths), timestampProducer, { channel, onAccept });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8859, dependencyMap.paths), React5, { channelId, onOpenRTCDebugOverlay });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9319, dependencyMap.paths), React6, { channel });
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      tmp(4929).openGuildVoiceModal(isGuildStageVoice);
      const tmpResult = tmp(4929);
    } else {
      const obj3 = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      const tmp4 = tmp(1897)(9704, tmp2.paths);
      obj2.pushLazy(tmp4, obj3, tmp(4929).getVoiceChannelKey(isGuildStageVoice.id));
      const tmpResult2 = tmp(4929);
    }
    obj = StageVoicePanelExperiment;
    tmp2 = dependencyMap;
  }
};
export const showPlatformUserProfile = function showPlatformUserProfile(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.isVoiceContext = true;
  showUserProfileActionSheetDefault(obj);
};
export const shouldShowBlockedUsers = function shouldShowBlockedUsers(id) {
  const stageBlockedUsersCount = useStageBlockedUsersCount.getStageBlockedUsersCount(id);
  return stageBlockedUsersCount > 0 || useStageBlockedUsersCount.getStageIgnoredUsersCount(id) > 0;
};
export const navigateToStage = function navigateToStage(id, arg1) {
  if (arg1 !== id.id) {
    setIsOnStartStageScreen(true);
  }
  if (id.isGuildStageVoice()) {
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      tmp3(4929).openGuildVoiceModal(id);
      const tmp3Result = tmp3(4929);
    } else {
      const obj3 = { channel: id };
      const obj2 = ModalActionCreatorsDefault;
      const tmp6 = tmp3(1897)(9704, tmp4.paths);
      obj2.pushLazy(tmp6, obj3, tmp3(4929).getVoiceChannelKey(id.id));
      const tmp3Result2 = tmp3(4929);
    }
    obj = StageVoicePanelExperiment;
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
