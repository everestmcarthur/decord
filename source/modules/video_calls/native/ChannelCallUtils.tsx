// Module ID: 17590
// Function ID: 17591
// Name: ChannelCallUtils
// Dependencies: [19, 4761, 1074, 21, 1115, 17591, 7578, 4689, 4923, 5067, 17588, 1897, 17592, 4774, 17593, 10065, 11830, 10245, 8865, 7, 4420, 8593, 2]
// Exports: invite, openHideSelfStreamAndVideoConfirmDialog, reportStreamIssue, rtcDebugPanel, selfVideoHidden, shareActivityLogs, videoParticipantsHidden, voiceSettings

// Module 17590 (ChannelCallUtils)
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4774 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4923 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5067 */;
import _modDef8865 from "module_8865" /* 8865 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10065 */;
import _modDef10245 from "module_10245" /* 10245 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11830 */;
import _modDef17591 from "module_17591" /* 17591 */;
import _modDef17592 from "module_17592" /* 17592 */;
import noop from "module_19" /* 19 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4761 */;

const require = globalThis.__r;

const asyncRequireImpl = tmp(1897);
require = fn;
const Constants = fn(1074);
({ UserSettingsSections: closure_4, AnalyticsPages: hasOwnProperty, InstantInviteSources: metroRequire, RPC_APPLICATION_LOGGING_CATEGORY: closure_7 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallUtils.tsx");

export const voiceSettings = function voiceSettings() {
  let obj = { label: null, icon: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.NiTd0e);
  obj.icon = _modDef17591;
  obj.onPress = function onPress() {
    require("openUserSettings").openUserSettings({ screen: constants.VOICE });
    const obj = require("openUserSettings");
    const obj2 = { screen: constants.VOICE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return obj;
};
export const videoParticipantsHidden = function videoParticipantsHidden(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.hoZYAA);
  obj.switchValue = !arg1;
  obj.onPress = function onPress() {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(id.id, !closure_1);
  };
  return obj;
};
export const openHideSelfStreamAndVideoConfirmDialog = function openHideSelfStreamAndVideoConfirmDialog(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(17588, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.type = type;
          obj.onConfirm = onConfirm;
          return <closure_0 />;
        };
      });
    }
  });
};
export const selfVideoHidden = function selfVideoHidden(arg0, arg1) {
  closure_0 = arg1;
  const obj = { label: null, switchValue: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.MH8ESU);
  obj.switchValue = !arg0;
  obj.onPress = function onPress() {
    closure_0();
  };
  return obj;
};
export const reportStreamIssue = function reportStreamIssue(stream) {
  _require = stream;
  let obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.KHGhHf);
  obj.icon = _modDef17592;
  obj.onPress = function onPress() {
    const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(stream);
    let videoStats = StreamRTCConnectionStore.getVideoStats(encodeStreamKeyResult);
    if (videoStats == null) {
      videoStats = {};
    }
    const tmp2 = dependencyMap;
    const merged = Object.assign(videoStats);
    const obj3 = { media_session_id: StreamRTCConnectionStore.getMediaSessionId(encodeStreamKeyResult), rtc_connection_id: StreamRTCConnectionStore.getRtcConnectionId(encodeStreamKeyResult), stream_region: StreamRTCConnectionStore.getRegion(encodeStreamKeyResult), max_viewers: StreamRTCConnectionStore.getMaxViewers(encodeStreamKeyResult) };
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.openLazy(asyncRequireImpl(17593, tmp2.paths), "StreamReportProblem" + stream.ownerId, { stream, analyticsData: obj3 });
  };
  return obj;
};
export const invite = function invite(dependencyMap, stream, targetApplicationId) {
  _require = dependencyMap;
  importDefault = stream;
  dependencyMap = targetApplicationId;
  if (null != stream) {
    function onPress() {
      return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(closure_0, { source: constants2.STREAM, stream });
    }
  } else {
    onPress = function onPress() {
      return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(closure_0, { source: constants2.VOICE_CHANNEL });
    };
    if (null != targetApplicationId) {
      onPress = function onPress() {
        return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(closure_0, { source: constants2.ACTIVITY_INVITE, targetApplicationId });
      };
    }
  }
  if (dependencyMap.isPrivate()) {
    onPress = function onPress() {
      return openGroupDMAddMembersDefault(dependencyMap.id, constants.CHANNEL_CALL);
    };
  }
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.VINpSK);
  obj.icon = _modDef10245;
  obj.onPress = onPress;
  return obj;
};
export const rtcDebugPanel = function rtcDebugPanel(arg0) {
  _require = arg0;
  const obj = { label: null, icon: null, onPress: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.X8bCMe);
  obj.icon = _modDef8865;
  obj.onPress = function onPress() {
    closure_0();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return obj;
};
export const shareActivityLogs = function shareActivityLogs() {
  const obj = { label: null, icon: null, onPress: null };
  let intl = util.intl;
  obj.label = intl.string(util.t.iQzQs3);
  obj.icon = _modDef8865;
  obj.onPress = function onPress() {
    const items = [closure_1_7];
    const json = require("LogAggregator").stringify(items);
    if ("" === json) {
      const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: null };
      const intl = tmp(tmp2[4]).intl;
      obj2.content = intl.string(tmp(tmp2[4]).t["i+9VWy"]);
      require("ToastActionCreators").open(obj2);
      const obj4 = require("ToastActionCreators");
    } else {
      const obj3 = { message: json };
      tmp(tmp2[21]).showShareActionSheet(obj3, "Activity Logs");
      const tmpResult = tmp(tmp2[21]);
    }
  };
  return obj;
};
