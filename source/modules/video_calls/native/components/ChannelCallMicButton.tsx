// Module ID: 10092
// Function ID: 10093
// Name: ChannelCallMicButton
// Dependencies: [19, 4623, 21, 7418, 504, 10093, 10094, 9588, 1114, 10097, 10098, 576, 2]
// Exports: ChannelCallMicButton

// Module 10092 (ChannelCallMicButton)
import useMuteStatesDefault from "useMuteStates" /* 7418 */;
import CallBarActionAll from "CallBarAction" /* 9588 */;
import VoicePanelRiveMicButton from "VoicePanelRiveMicButton" /* 10094 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4623 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  const tmp3 = useMuteStatesDefault(channel);
  const items = [GameConsoleStore];
  const stateFromStores = mute(504).useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const obj = mute(504);
  const muteHandler = mute(10093).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = noop.useMemo(() => jsx(VoicePanelRiveMicButton.VoicePanelRiveMicButton, { muted: mute }), items1);
  const obj3 = { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null };
  const intl = mute(1114).intl;
  obj3.accessibilityLabel = intl.string(mute(1114).t.B3zz0G);
  obj3.onPress = muteHandler.onPress;
  obj3.source = importDefault(mute ? 10097 : 10098);
  if (!flag) {
    flag = mute;
  }
  obj3.isActive = flag;
  obj3.isSmallSize = isSmallSize;
  obj3.lottieComponent = memo;
  let RED_400;
  if (mute) {
    RED_400 = tmp(576).unsafe_rawColors.RED_400;
  }
  obj3.tintColor = RED_400;
  return jsx(CallBarActionAll.ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null });
};
