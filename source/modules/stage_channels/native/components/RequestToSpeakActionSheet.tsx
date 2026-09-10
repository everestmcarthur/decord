// Module ID: 9947
// Function ID: 9948
// Name: RequestToSpeakActionSheet
// Dependencies: [32, 19, 17, 502, 1957, 5428, 21, 4574, 576, 9948, 7214, 1114, 504, 4721, 9949, 9951, 5619, 5436, 8439, 8441, 4541, 8426, 1178, 9953, 4275, 7176, 7196, 5445, 5439, 7164, 6641, 4987, 5701, 4570, 9954, 2]
// Exports: default

// Module 9947 (RequestToSpeakActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4721 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5436 */;
import TableSwitchRow from "TableSwitchRow" /* 7214 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8426 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8439 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8441 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 9948 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const _modDef9953 = tmp4(9953);
require = fn;
function RequestToSpeakRow(channel) {
  c0 = undefined;
  [tmp2, c0] = useRequestToSpeakPermission.useRequestToSpeakPermission(channel.channel.id);
  const obj2 = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.TYZgzW);
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (tmp2) {
    let stringResult = string(t["JcFI/U"]);
  } else {
    stringResult = string(t.laPwJQ);
  }
  obj2.subLabel = stringResult;
  obj2.value = tmp2;
  obj2.onValueChange = function onValueChange(arg0) {
    return _undefined(arg0);
  };
  return React7(TableSwitchRow.TableSwitchRow, obj2);
}
function ManageSelfSpeakerRow(channel) {
  channel = channel.channel;
  importDefault = undefined;
  const items = [AuthenticationStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => id.getId());
  let id;
  let obj = channel(504);
  if (channel != null) {
    id = channel.id;
  }
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(4721).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1114).intl;
  const string = intl.string;
  const t = tmp(1114).t;
  if (tmp8) {
    let stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    let MicrophoneArrowRightIcon = tmp(9949).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(9951).MicrophoneArrowRightIcon;
  }
  let obj2 = {
    onPress() {
      if (!closure_1) {
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
        }
        obj = useStageSpeakingForCurrentUser;
      }
      const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(channel, closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
    },
    icon: closure_9(MicrophoneArrowRightIcon, {}),
    label: stringResult,
    trailing: null
  };
  const tmp5Result = useAudienceRequestToSpeakStateDefault(stateFromStores, id);
  obj2.trailing = closure_9(channel(1178).Icon, { source: _modDef9953 });
  return closure_9(channel(5619).TableRow, obj2);
}
const View = fn(17).View;
let closure_8 = fn(5428).REQUEST_TO_SPEAK_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default function RequestToSpeakActionSheet(channelId) {
  channelId = channelId.channelId;
  let first;
  let first1;
  noop = undefined;
  const token = channelId(4275).useToken(first(576).modules.mobile.TABLE_ROW_PADDING);
  const obj = channelId(4275);
  const tmp3 = first;
  const items = [];
  const tmp5 = closure_11();
  const tmp6 = first(7176);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(7196).REQUEST_TO_SPEAK;
  const arraySpreadResult = HermesBuiltin.arraySpread(channelId.analyticsLocations, 0);
  const items1 = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const stageParticipantsCount = channelId(5445).useStageParticipantsCount(channelId, channelId(5439).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp10 = first1(noop.useState(0), 2);
  first = tmp10[0];
  dependencyMap = tmp10[1];
  const tmp12 = first1(noop.useState(0), 2);
  first1 = tmp12[0];
  noop = tmp12[1];
  let tmp14 = null;
  if (null != stateFromStores) {
    const obj4 = { value: tmp6(items).analyticsLocations, children: null };
    const obj5 = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: null };
    const obj6 = {
      style: tmp5.container,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first1 !== height;
          }
          if (tmp) {
            closure_4(height);
          }
        },
      children: null
    };
    const obj7 = { spacing: 8, children: null };
    const obj8 = {
      spacing: 8,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first !== height;
          }
          if (tmp) {
            closure_2(height);
          }
        },
      children: null
    };
    const obj9 = { hasIcons: true, children: null };
    const obj10 = { channel: stateFromStores };
    const items2 = [closure_9(RequestToSpeakRow, obj10), ];
    const obj11 = { channel: stateFromStores };
    items2[1] = closure_9(ManageSelfSpeakerRow, obj11);
    obj9.children = items2;
    const items3 = [closure_10(tmp(5701).TableRowGroup, obj9), ];
    const obj12 = { style: null, children: null };
    const obj13 = { paddingHorizontal: token };
    obj12.style = obj13;
    const obj14 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp(1114).intl;
    const obj15 = { numHands: null };
    const _HermesInternal = HermesInternal;
    obj15.numHands = "" + stageParticipantsCount;
    obj14.children = intl.format(tmp(1114).t["5z7q5a"], obj15);
    obj12.children = closure_9(tmp(4570).Text, obj14);
    items3[1] = closure_9(View, obj12);
    obj8.children = items3;
    const items4 = [closure_10(tmp(4987).Stack, obj8), ];
    const obj16 = { channel: stateFromStores, height: null };
    const _Math = Math;
    obj16.height = Math.max(first1 - first - 8, 0);
    items4[1] = closure_9(tmp3(9954), obj16);
    obj7.children = items4;
    obj6.children = closure_10(tmp(4987).Stack, obj7);
    obj5.children = closure_9(tmp(6641).BottomSheetScrollView, obj6);
    obj4.children = closure_9(tmp(7164).BottomSheet, obj5);
    tmp14 = closure_9(tmp(7176).AnalyticsLocationProvider, obj4);
    const tmp3Result = tmp3(9954);
  }
  return tmp14;
};
