// Module ID: 10124
// Function ID: 10125
// Name: ChannelCallHeaderButtons
// Dependencies: [19, 1908, 21, 504, 10015, 1114, 10125, 9179, 9560, 9561, 10126, 4807, 2]
// Exports: CameraButton, GridButton

// Module 10124 (ChannelCallHeaderButtons)
import initialize from "initialize" /* 504 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4807 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9179 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9561 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 10015 */;
import _modDef10125 from "module_10125" /* 10125 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

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
    const intl = tmp(1114).intl;
    obj2.accessibilityLabel = intl.string(tmp(1114).t["t9eQ/g"]);
    obj2.source = _modDef10125;
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
      const intl = channel(1114).intl;
      obj.accessibilityLabel = intl.string(channel(1114).t.HK4JIu);
      obj.source = tmp(10126);
      obj.onPress = function onPress() {
        return ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
      };
      tmp4 = jsx(tmp(10015), { accessibilityLabel: null, source: null, onPress: null, disableBackground: true });
      const tmpResult = tmp(10015);
    }
  }
  return tmp4;
};
