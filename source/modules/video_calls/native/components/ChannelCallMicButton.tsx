// Module ID: 10007
// Function ID: 10008
// Name: ChannelCallMicButton
// Dependencies: [19, 4577, 21, 7345, 504, 10008, 10009, 9502, 1114, 10012, 10013, 576, 2]
// Exports: ChannelCallMicButton

// Module 10007 (ChannelCallMicButton)
import getMuteStatesDefault from "getMuteStates" /* 7345 */;
import ActionButtonAll from "ActionButton" /* 9502 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "set" /* 4577 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallMicButton.tsx");

export const ChannelCallMicButton = function ChannelCallMicButton(disableTint) {
  let flag = disableTint.disableTint;
  ({ channel, isSmallSize } = disableTint);
  if (flag === undefined) {
    flag = false;
  }
  let mute;
  let obj = mute(504);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const tmp3 = getMuteStatesDefault(channel);
  const muteHandler = mute(10008).createMuteHandler(tmp3, stateFromStores);
  mute = muteHandler.mute;
  const items1 = [mute];
  const memo = React.useMemo(() => closure_1_6(mute(closure_1_3[6]).VoicePanelRiveMicButton, { muted: mute }), items1);
  obj = { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null };
  const intl = mute(1114).intl;
  obj[1] = intl.string(mute(1114).t.B3zz0G);
  obj[2] = muteHandler.onPress;
  obj[3] = importDefault(mute ? 10012 : 10013);
  if (!flag) {
    flag = mute;
  }
  obj[4] = flag;
  obj[5] = isSmallSize;
  obj[6] = memo;
  let RED_400;
  if (mute) {
    RED_400 = tmp(576).unsafe_rawColors.RED_400;
  }
  obj[7] = RED_400;
  return jsx(ActionButtonAll.ToggledActionButton, { appearsDisabled: stateFromStores, accessibilityLabel: null, onPress: null, source: null, isActive: null, isSmallSize: null, lottieComponent: null, tintColor: null });
};
