// Module ID: 9685
// Function ID: 9686
// Name: useGlobalStatusIndicatorState
// Dependencies: [1957, 4583, 9686, 1074, 9496, 9221, 504, 9684, 9682, 4417, 4767, 9687, 9688, 2]
// Exports: useGlobalStatusIndicatorState

// Module 9685 (useGlobalStatusIndicatorState)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9221 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 9684 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

const useMyCurrentStageChannelDefault = tmp4(9688);
const require = fn;
const RTC_PANEL_HEIGHT = fn(9686).RTC_PANEL_HEIGHT;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = function useGlobalStatusIndicatorState(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  importDefault = undefined;
  let hasPipParticipant = stateFromStores(9496).useHasPipParticipant({ isActivityViewFocused: false });
  const tmp5 = useVoiceStateForRemoteSessionDefault();
  const obj = stateFromStores(9496);
  const items = [RTCConnectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => channelId.getChannelId());
  const tmp7 = useIsInvitedToSpeakDefault();
  importDefault = tmp7;
  const obj2 = stateFromStores(504);
  const items1 = [ChannelStore];
  const items2 = [stateFromStores, tmp7];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(stateFromStores);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = !closure_1;
    }
    return isGuildStageVoiceResult;
  }, items2);
  const obj3 = stateFromStores(504);
  let num = stateFromStores(9682).useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(4417);
  let tmp12 = null != tmp5;
  if (tmp12) {
    let channelId = tmp5.channelId;
    if (channelId == null) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp12 = tmp(4767).getVoiceChannelKey(channelId) !== tmp11;
    const tmpResult = tmp(4767);
  }
  const obj4 = stateFromStores(9682);
  let isVoicePanelShowing = stateFromStores(9687).useIsVoicePanelShowing();
  const tmp14 = null != useMyCurrentStageChannelDefault();
  if (!isVoicePanelShowing) {
    let tmp15 = !tmp12;
    if (!tmp12) {
      let tmp16 = !tmp14;
      if (tmp14) {
        tmp16 = !tmp7;
      }
      tmp15 = tmp16;
    }
    if (tmp15) {
      let tmp17 = !tmp9;
      if (tmp9) {
        if (hasPipParticipant) {
          hasPipParticipant = !flag;
        }
        tmp17 = hasPipParticipant;
      }
      tmp15 = tmp17;
    }
    isVoicePanelShowing = tmp15;
  }
  let tmp18 = !isVoicePanelShowing;
  if (isVoicePanelShowing) {
    num = 0;
    if (!isVoicePanelShowing) {
      num = RTC_PANEL_HEIGHT;
    }
  }
  const obj5 = { height: num, isVisible: tmp18, isCustomBackground: null };
  if (!isVoicePanelShowing) {
    tmp18 = tmp9;
  }
  if (tmp18) {
    tmp18 = !stateFromStores1;
  }
  obj5.isCustomBackground = tmp18;
  return obj5;
};
