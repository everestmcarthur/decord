// Module ID: 7866
// Function ID: 7867
// Name: PressableNavigatorBackIcon
// Dependencies: [19, 17, 1957, 7636, 2011, 21, 4560, 1178, 576, 504, 4378, 7867, 5123, 1114, 7868, 7869, 2]

// Module 7866 (PressableNavigatorBackIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles(() => {
  const obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  const rect = { position: "absolute", minWidth: native.BADGE_SIZE, height: native.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  obj.maskWrapper = rect;
  obj.maskStroke = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonPressable = { padding: 8, zIndex: 100, borderRadius: 20 };
  const obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonIcon = { tintColor: nativeDefault.colors.ICON_SUBTLE };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = noop.forwardRef((navigation, ref) => {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0 }));
  let stateFromStores;
  const tmp2 = closure_11();
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = navigation(stateFromStores[9]).useStateFromStores(items, () => {
    totalMentionCount = totalMentionCount.getTotalMentionCount();
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      channel = channel.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
    }
    obj = totalMentionCount;
  });
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    if (stateFromStores >= 10) {
      if (tmp < 100) {
        const obj2 = { minWidth: native.BADGE_SIZE + 8 };
        let obj = obj2;
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  let obj = navigation(stateFromStores[9]);
  let obj2 = noop;
  let backgroundColor = navigation(stateFromStores[10]).useGradientValue(navigation(stateFromStores[10]).GradientPercentage.START);
  if (null == backgroundColor) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = obj2.useCallback(() => {
    if (null == onPress) {
      if (navigation != null) {
        obj.goBack();
      }
      obj = navigation;
    } else {
      tmp();
    }
  }, items2);
  const obj3 = navigation(stateFromStores[10]);
  const obj4 = { ref };
  const merged1 = Object.assign(merged);
  obj4.accessibilityRole = "button";
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[13]).intl;
    const obj5 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[13]).t.vxFYaM, obj5);
  } else {
    const intl = tmp3(tmp4[13]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[13]).t["13/7kX"]);
  }
  obj4.accessibilityLabel = formatToPlainStringResult;
  obj4.onPress = callback;
  obj4.style = tmp2.actionButtonPressable;
  const tmp10 = onPress(stateFromStores[11]);
  const items3 = [closure_9(closure_5, { source: onPress(stateFromStores[14]), style: { tintColor: tmp2.actionButtonIcon.tintColor } }), ];
  let tmp8Result = null;
  if (stateFromStores > 0) {
    const obj7 = { style: tmp2.maskWrapper, children: null };
    const obj8 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    obj7.children = tmp8(tmp9(tmp4[15]), obj8);
    tmp8Result = tmp8(tmp14, obj7);
  }
  const obj9 = { children: null };
  items3[1] = tmp8Result;
  obj4.children = closure_10(closure_4, { children: items3 });
  obj9.children = closure_9(navigation(stateFromStores[12]).PressableOpacity, obj4);
  return closure_9(tmp10, obj9);
});
