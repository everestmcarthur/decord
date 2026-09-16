// Module ID: 13872
// Function ID: 13873
// Name: VoiceActionSheet
// Dependencies: [19, 17, 4662, 21, 4638, 7272, 7292, 504, 4495, 4845, 13873, 13874, 7307, 13884, 13887, 13888, 5048, 13891, 2]
// Exports: default

// Module 13872 (VoiceActionSheet)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4495 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7272 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7292 */;
import VoiceActionSheetManagerDefault from "VoiceActionSheetManager" /* 13873 */;
import noop from "module_19" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4662 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
const obj2 = { container: { flex: 1 }, visualEffectView: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj2.visualEffectView = obj3;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_8();
  const tmp4 = useAnalyticsLocationsDefault;
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items, () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id));
  const effect = noop.useEffect(() => {
    const obj = NavigationRouteUtils;
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      VoiceActionSheetManagerDefault.initialize(channel);
    }
    return () => {
      closure_1_1(closure_1_2[10]).terminate();
    };
  }, items1);
  let obj = channel(504);
  if (obj2.requiresVoiceChannelsOnboard()) {
    let obj3 = { children: null };
    const obj4 = { channel };
    obj3.children = closure_6(tmp2(13884), obj4);
    let children = closure_6(tmp5(7307).ActionSheet, obj3);
    let tmp8 = closure_6;
  } else if (stateFromStores) {
    const obj5 = { children: null };
    const obj6 = { channel };
    const items2 = [closure_6(tmp2(13887), obj6), ];
    const obj7 = { channel };
    items2[1] = closure_6(tmp2(13888), obj7);
    obj5.children = items2;
    children = closure_7(tmp5(7307).ActionSheet, obj5);
    tmp8 = closure_6;
  } else {
    tmp8 = closure_6;
    const obj8 = { scrollable: true, startExpanded: true, children: null };
    const obj9 = { style: tmp.container, children: null };
    const obj10 = { blurTheme: "dark", style: tmp.visualEffectView };
    const items3 = [closure_6(tmp2(5048), obj10), ];
    const obj11 = { channel };
    items3[1] = closure_6(tmp2(13891), obj11);
    obj9.children = items3;
    obj8.children = closure_7(closure_4, obj9);
    children = closure_6(tmp5(7307).ActionSheet, obj8);
  }
  return tmp8(channel(7272).AnalyticsLocationProvider, { value: tmp4(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
};
