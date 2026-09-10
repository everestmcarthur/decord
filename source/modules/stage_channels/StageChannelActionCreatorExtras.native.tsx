// Module ID: 8422
// Function ID: 8423
// Name: StageChannelActionCreatorExtras
// Dependencies: [8423, 5428, 4541, 8425, 1896, 8623, 8651, 8654, 9113, 4783, 4781, 4777, 9498, 8205, 8653, 2]
// Exports: navigateToStage, openEndGuildEventConfirmationModal, openEndStageModal, openStageBlockedUsersSheet, openStageChannel, openStageChannelAudienceNoticeModal, openStageChannelSettings, openStageSettingsSheet, shouldShowBlockedUsers, showChannelChangeConfirmationAlert, showPlatformUserProfile

// Module 8422 (StageChannelActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import StageVoicePanelExperiment from "StageVoicePanelExperiment" /* 4783 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8205 */;
import useIsOnStartStageScreenStore from "useIsOnStartStageScreenStore" /* 8423 */;
import useStageBlockedUsersCount from "useStageBlockedUsersCount" /* 8653 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5428 */;
import size from "module_2" /* 2 */;

const setIsOnStartStageScreen = useIsOnStartStageScreenStore.setIsOnStartStageScreen;
({ STAGE_AUDIENCE_NOTICE_SHEET_KEY: closure_4, START_STAGE_CHANNEL_EVENT_SHEET_KEY: hasOwnProperty, STAGE_BLOCKED_USERS_SHEET_KEY: metroRequire, STAGE_SETTINGS_SHEET_KEY: closure_7, EXPLICIT_END_STAGE_SHEET_KEY: closure_8 } = StageChannelsConstants);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelActionCreatorExtras.native.tsx");

export const openStageChannelSettings = function openStageChannelSettings(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8425, dependencyMap.paths), hasOwnProperty, { channel });
};
export function openEndGuildEventConfirmationModal() {

}
export const openStageChannelAudienceNoticeModal = function openStageChannelAudienceNoticeModal(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8623, dependencyMap.paths), React4, { channelId });
};
export const openStageBlockedUsersSheet = function openStageBlockedUsersSheet(channel, onAccept) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8651, dependencyMap.paths), timestampProducer, { channel, onAccept });
};
export const openStageSettingsSheet = function openStageSettingsSheet(channelId, onOpenRTCDebugOverlay) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8654, dependencyMap.paths), React5, { channelId, onOpenRTCDebugOverlay });
};
export const openEndStageModal = function openEndStageModal(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9113, dependencyMap.paths), React6, { channel });
};
export const openStageChannel = function openStageChannel(isGuildStageVoice) {
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (obj.isStageVoicePanelEnabled("stage_channel_action_creator_extras")) {
      tmp(4781).openGuildVoiceModal(isGuildStageVoice);
      const tmpResult = tmp(4781);
    } else {
      const obj3 = { channel: isGuildStageVoice };
      const obj2 = ModalActionCreatorsDefault;
      const tmp4 = tmp(1896)(9498, tmp2.paths);
      obj2.pushLazy(tmp4, obj3, tmp(4781).getVoiceChannelKey(isGuildStageVoice.id));
      const tmpResult2 = tmp(4781);
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
      tmp3(4781).openGuildVoiceModal(id);
      const tmp3Result = tmp3(4781);
    } else {
      const obj3 = { channel: id };
      const obj2 = ModalActionCreatorsDefault;
      const tmp6 = tmp3(1896)(9498, tmp4.paths);
      obj2.pushLazy(tmp6, obj3, tmp3(4781).getVoiceChannelKey(id.id));
      const tmp3Result2 = tmp3(4781);
    }
    obj = StageVoicePanelExperiment;
    tmp4 = dependencyMap;
  }
};
export function showChannelChangeConfirmationAlert() {
  return false;
}
