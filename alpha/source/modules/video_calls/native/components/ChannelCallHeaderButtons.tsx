// Module ID: 10290
// Function ID: 10291
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 1992, 21, 504, 10181, 1115, 10291, 9910, 9641, 9642, 10292, 4957, 2]
// Exports: CameraButton, GridButton

// Module 10290 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9642 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9910 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10181 */;
import _modDef10291 from "module_10291" /* 10291 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallHeaderButtons.tsx");

export const CameraButton = function CameraButton() {
  const items = [MediaEngineStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isVideoEnabled: MediaEngineStore.isVideoEnabled(), videoDeviceId: MediaEngineStore.getVideoDeviceId(), videoDevices: MediaEngineStore.getVideoDevices() }));
  ({ videoDeviceId: require, videoDevices: importDefault } = stateFromStoresObject);
  let tmp4 = null;
  if (stateFromStoresObject.isVideoEnabled) {
    const obj2 = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
    const intl = tmp(1115).intl;
    obj2.accessibilityLabel = intl.string(tmp(1115).t["t9eQ/g"]);
    obj2.source = _modDef10291;
    obj2.onPress = function onPress() {
      const keys = Object.keys(closure_1_1);
      const found = keys.find((item) => item !== closure_1_0);
      if (null != found) {
        AudioActionCreatorsDefault.setVideoDevice(found);
      }
    };
    tmp4 = jsx(ChannelCallNavigatorIconDefault, { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
  }
  return tmp4;
};
export const GridButton = function GridButton(channel) {
  channel = channel.channel;
  let tmp4 = null;
  if (null != useSelectedParticipantDefault(channel)) {
    tmp4 = null;
    if (!tmp3) {
      const obj = { accessibilityLabel: null, source: null, onPress: null, disableBackground: true };
      const intl = channel(1115).intl;
      obj.accessibilityLabel = intl.string(channel(1115).t.HK4JIu);
      obj.source = tmp(10292);
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10181), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10181);
    }
  }
  return tmp4;
};
