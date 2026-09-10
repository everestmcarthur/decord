// Module ID: 17303
// Function ID: 17304
// Name: VoicePanelVoiceControlsButtons
// Dependencies: [32, 19, 1956, 4621, 1185, 9556, 4627, 502, 1908, 4624, 1074, 17304, 4630, 21, 4950, 17305, 1896, 1114, 9283, 5737, 10007, 504, 4303, 9285, 9533, 5655, 5661, 12342, 17264, 5156, 5121, 17292, 12598, 10021, 1242, 10087, 10056, 1115, 576, 9158, 7252, 9192, 17210, 9151, 9183, 5662, 17195, 17150, 10102, 10071, 4806, 10180, 10020, 17306, 9447, 11445, 9585, 17307, 8697, 573, 10048, 7432, 17209, 2]
// Exports: ActivitiesButton, AudioRouteButton, ChatButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ScreenshareButton, ShareActivityLogsButton, SoundboardButton, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 17303 (VoicePanelVoiceControlsButtons)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4303 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4806 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4950 */;
import TableRow from "TableRow" /* 5655 */;
import TableRowIcon from "TableRowIcon" /* 5661 */;
import TableRowArrow from "TableRowArrow" /* 5662 */;
import TableRowGroup from "TableRowGroup" /* 5737 */;
import TableSwitchRow from "TableSwitchRow" /* 7252 */;
import _modDef8697 from "module_8697" /* 8697 */;
import CallsUtils from "CallsUtils" /* 9151 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9158 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9183 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9192 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9283 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9585 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 10048 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 10087 */;
import _modDef11445 from "module_11445" /* 11445 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 17150 */;
import useCanInviteMembers from "useCanInviteMembers" /* 17195 */;
import _modDef17209 from "module_17209" /* 17209 */;
import _modDef17210 from "module_17210" /* 17210 */;
import useSoundboardConfigDefault from "useSoundboardConfig" /* 17292 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 17306 */;
import ChannelCallUtils from "ChannelCallUtils" /* 17307 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4621 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9556 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4627 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import VoiceStateStore from "VoiceStateStore" /* 4624 */;

const require = globalThis.__r;

const _modDef10071 = tmp4(10071);
require = fn;
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    ({ account, connected } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    tmp2 = closure_2;
    tmp = closure_1;
    tmp4 = channel;
    tmp3 = closure_1(closure_2[20])(channel);
    obj = channel(closure_2[20]);
    tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    closure_1 = tmp5;
    tmp4Result = tmp4(tmp2[21]);
    items = [];
    items[0] = closure_12;
    stateFromStores = tmp4Result.useStateFromStores(items, () => VoiceStateStore.isInChannel(channel.id));
    tmp7 = !stateFromStores;
    if (!stateFromStores) {
      tmp7 = tmp3;
    }
    if (!tmp7) {
      tmp7 = tmp5;
    }
    items1 = [];
    items1[0] = tmp5;
    callback = closure_4.useCallback(() => {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (closure_1) {
        let stringResult = string(t.rimHDW);
        let tmp5 = tmp3;
      } else {
        stringResult = string(t.rZfiNq);
        tmp5 = tmp3;
      }
      const obj2 = { key: stringResult, content: null };
      const intl2 = tmp5(1114).intl;
      const string2 = intl2.string;
      const t2 = tmp5(1114).t;
      if (closure_1) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj2.content = string2Result;
      ToastActionCreatorsDefault.open(obj2);
    }, items1);
    tmp4Result1 = tmp4(tmp2[23]);
    onConnectToConsole = tmp4Result1.useOnConnectToConsole(channel, account);
    closure_2 = onConnectToConsole;
    items2 = [];
    items2[0] = onConnectToConsole;
    callback1 = closure_4.useCallback(() => {
      onConnectToConsole();
    }, items2);
    type = account.type;
    tmp11 = PlatformTypes;
    if (type === PlatformTypes.XBOX) {
      intl3 = tmp4(tmp2[17]).intl;
      string3 = intl3.string;
      t = tmp4(tmp2[17]).t;
      if (connected) {
        t = t["qVE/VF"];
        string3Result = string3(t);
      } else {
        string3Result = string3(t.E8euSk);
      }
      tmp18 = string3Result;
    } else if (type === tmp11.PLAYSTATION) {
      intl2 = tmp4(tmp2[17]).intl;
      string2 = intl2.string;
      vzfxmY = tmp4(tmp2[17]).t;
      if (connected) {
        vzfxmY = vzfxmY.vzfxmY;
        string2Result = string2(vzfxmY);
      } else {
        string2Result = string2(vzfxmY.QxEYDj);
      }
      tmp15 = string2Result;
    } else if (type !== tmp11.PLAYSTATION_STAGING) {
      tmp19 = tmp(tmp2[24])(account.type);
      tmp20 = null;
      tmp22Result1 = null;
      if (null != undefined) {
        tmp22 = jsx;
        tmp22Result = undefined;
        if (null != tmp19) {
          obj1 = { source: null };
          obj1.source = tmp19;
          tmp22Result = tmp22(tmp4(tmp2[26]).TableRowIcon, obj1);
        }
        obj6 = { icon: null, label: null, disabled: null, onPress: null };
        obj6.icon = tmp22Result;
        obj6.label = undefined;
        obj6.disabled = tmp7;
        if (tmp7) {
          callback1 = callback;
        }
        obj6.onPress = callback1;
        tmp22Result1 = tmp22(tmp4(tmp2[25]).TableRow, obj6);
      }
      return tmp22Result1;
    } else {
      intl = tmp4(tmp2[17]).intl;
      string = intl.string;
      BDiXtV = tmp4(tmp2[17]).t;
      if (connected) {
        BDiXtV = BDiXtV.BDiXtV;
        stringResult = string(BDiXtV);
      } else {
        stringResult = string(BDiXtV["bhdB9+"]);
      }
      tmp13 = stringResult;
    }
    return;
  }
}
function toggleDeaf() {
  AudioActionCreatorsDefault.toggleSelfDeaf();
}
const Constants = fn(1074);
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = Constants);
let closure_15 = fn(17304).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(4630).MediaEngineContextTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const arr = useGameConsoleAccountsDefault();
  let tmp2 = null;
  if (arr.length > 0) {
    const obj = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["mbi/fB"]);
    obj.children = arr.map((account) => <GameConsoleAccountButton key={arg0.type} account={arg0} channel={channel} connected={connected} />);
    tmp2 = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12342)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5661).TableRowIcon, { IconComponent: openTab(5156).AppsIcon }), label: null };
  const intl = openTab(1114).intl;
  obj.label = intl.string(openTab(1114).t.aeuOoh);
  return jsx(openTab(5655).TableRow, { onPress: callback, icon: jsx(openTab(5661).TableRowIcon, { IconComponent: openTab(5156).AppsIcon }), label: null });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12342)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5661).TableRowIcon, { IconComponent: openTab(5121).ChatIcon }), label: null };
  const intl = openTab(1114).intl;
  obj.label = intl.string(openTab(1114).t["5KxXrK"]);
  return jsx(openTab(5655).TableRow, { onPress: callback, icon: jsx(openTab(5661).TableRowIcon, { IconComponent: openTab(5121).ChatIcon }), label: null });
};
export const SoundboardButton = function SoundboardButton(channel) {
  let tmp8 = null;
  if (tmp2Result.visible) {
    const obj = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = tmp3(1114).intl;
    obj.label = intl.string(tmp3(1114).t.ABjMWI);
    obj.onPress = tmp5;
    obj.disabled = tmp6;
    obj.accessibilityHint = tmp7;
    const obj2 = { IconComponent: tmp3(12598).SoundboardIcon };
    obj.icon = jsx(tmp3(5661).TableRowIcon, { IconComponent: tmp3(12598).SoundboardIcon });
    tmp8 = jsx(tmp3(5655).TableRow, { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null });
  }
  return tmp8;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let isActive;
  const tmp = isActive(10021)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, { source: "voice controls", was_active: isActive });
    onPress();
  }, items);
  return jsx(onPress(5655).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5661).TableRowIcon, { source: imgSource }), label: text });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  let tmp11Result = null;
  if (null != stateFromStores) {
    const obj2 = { title: null, hasIcons: false, children: null };
    const intl = tmp(1114).intl;
    obj2.title = intl.string(tmp(1114).t.pEAl4b);
    const tmp4Result = tmp4(10056);
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    const obj3 = { label: null };
    const obj4 = { onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: tmp4(576).unsafe_rawColors.WHITE, maxTrackTintColor: tmp4(576).unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
    const intl2 = tmp(1114).intl;
    obj4.accessibilityLabel = intl2.string(tmp(1114).t.pEAl4b);
    obj3.label = <tmp4Result onResponderGrant={fn} value={tmp8} onValueChange={tmp9} color={tmp4(576).unsafe_rawColors.WHITE} maxTrackTintColor={tmp4(576).unsafe_rawColors.PRIMARY_300} accessibilityLabel={null} />;
    obj2.children = jsx(tmp(5655).TableRow, { label: null });
    tmp11Result = tmp11(tmp(5737).TableRowGroup, obj2);
    tmpResult = tmp(1115);
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  const items = [MediaEngineStore];
  const stateFromStores = initialize.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef17210 });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t.wjcRFX);
  obj2.value = stateFromStores;
  obj2.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj2.subLabel = intl3.string(util.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const obj2 = {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["A/Ly/2"]);
  obj2.trailing = jsx(TableRowArrow.TableRowArrow, {});
  return jsx(TableRow.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  });
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  const canInviteMembers = useCanInviteMembers.useCanInviteMembers(channel.id);
  useInviteMembersCallback;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (canInviteMembers) {
      tmp8 = null;
      if (channel.connected) {
        const obj2 = { onPress: tmp7, icon: null, label: null, trailing: null };
        const obj3 = { IconComponent: tmp(10102).GroupPlusIcon, source: _modDef10071 };
        obj2.icon = jsx(tmp(5661).TableRowIcon, { IconComponent: tmp(10102).GroupPlusIcon, source: _modDef10071 });
        const intl = tmp(1114).intl;
        obj2.label = intl.string(tmp(1114).t["f1+QIK"]);
        obj2.trailing = jsx(tmp(5662).TableRowArrow, {});
        tmp8 = jsx(tmp(5655).TableRow, { onPress: tmp7, icon: null, label: null, trailing: null });
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelRTCStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj = channelId(504);
  obj2.icon = jsx(channelId(5661).TableRowIcon, { IconComponent: channelId(10180).VideoIcon, source: stateFromStores(10020) });
  const intl = channelId(1114).intl;
  obj2.accessibilityHint = intl.string(channelId(1114).t.ZMTRyc);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = channelId(1114).intl;
  obj2.label = intl2.string(channelId(1114).t.ZMTRyc);
  const intl3 = channelId(1114).intl;
  obj2.subLabel = intl3.string(channelId(1114).t.MlpCFS);
  return jsx(channelId(7252).TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    let obj2 = { icon: null, value: null, onValueChange: null, label: null };
    const obj3 = { IconComponent: tmp5(9447).UserSquareIcon };
    obj2.icon = jsx(tmp5(5661).TableRowIcon, { IconComponent: tmp5(9447).UserSquareIcon });
    obj2.value = !tmp4;
    obj2.onValueChange = function onValueChange() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f119708 = () => f119708(!VIDEO);
          const obj2 = {
            importer() {
                  return VIDEO(paths[16])(paths[15], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.type = type;
                      obj.onConfirm = onConfirm;
                      return closure_3_17(closure_0, obj);
                    };
                  });
                }
          };
          actions_AlertActionCreatorsDefault.openLazy(obj2);
        }
      }
      return closure_1(!VIDEO);
    };
    const intl = tmp5(1114).intl;
    obj2.label = intl.string(tmp5(1114).t.MH8ESU);
    tmp6 = jsx(tmp5(7252).TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  const obj = { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef11445 }), label: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["R/FK4A"]);
  obj.onPress = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj2 = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj2.applicationId = applicationId;
    EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
  };
  return jsx(TableRow.TableRow, { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef11445 }), label: null, onPress: null });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  const shareActivityLogsResult = ChannelCallUtils.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const obj2 = { icon: null, value: null, onValueChange: null, label: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef8697 });
  obj2.value = stateFromStores;
  obj2.onValueChange = function onValueChange(visible) {
    DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["qv5/SP"]);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = noop.useCallback(() => {
    const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items);
  const obj = { onPress: callback, icon: jsx(guildId(5661).TableRowIcon, { IconComponent: guildId(7432).SettingsIcon, source: _modDef17209 }), label: null, subLabel: null, trailing: null };
  const intl = guildId(1114).intl;
  obj.label = intl.string(guildId(1114).t.NiTd0e);
  const intl2 = guildId(1114).intl;
  obj.subLabel = intl2.string(guildId(1114).t["16SG+O"]);
  obj.trailing = jsx(guildId(5662).TableRowArrow, {});
  return jsx(guildId(5655).TableRow, { onPress: callback, icon: jsx(guildId(5661).TableRowIcon, { IconComponent: guildId(7432).SettingsIcon, source: _modDef17209 }), label: null, subLabel: null, trailing: null });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  const reportStreamIssueResult = ChannelCallUtils.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  const rtcDebugPanelResult = ChannelCallUtils.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
