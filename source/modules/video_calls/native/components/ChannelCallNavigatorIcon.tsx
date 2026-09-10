// Module ID: 9994
// Function ID: 9995
// Name: ChannelCallNavigatorIcon
// Dependencies: [19, 17, 9537, 1074, 21, 4605, 576, 5173, 4456, 5015, 1178, 2]
// Exports: default

// Module 9994 (ChannelCallNavigatorIcon)
import nativeDefault from "native" /* 576 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5015 */;
import Pressables from "Pressables" /* 5173 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const resetFocusTimer = fn(9537).resetFocusTimer;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { pressableContainer: { marginHorizontal: 4 }, pressable: { borderRadius: nativeDefault.radii.lg }, container: null, text: null, disabled: null, iconColor: null };
let size = { flexDirection: "row", height: 32, width: 32, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = size;
let obj3 = { borderRadius: nativeDefault.radii.lg };
obj2.text = { marginLeft: 4, fontSize: 14, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj2.disabled = { opacity: 0.5 };
let obj4 = { marginLeft: 4, fontSize: 14, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj2.iconColor = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  ({ onPress: require, membersCount, disabled, theme } = disableBackground);
  ({ source, accessibilityLabel, children } = disableBackground);
  if (theme === undefined) {
    theme = "dark";
  }
  let flag = disableBackground.disableBackground;
  if (flag === undefined) {
    flag = true;
  }
  const IconComponent = disableBackground.IconComponent;
  const tmp = closure_8();
  const obj = { style: tmp.pressableContainer, children: null };
  const obj2 = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != resetFocusTimer) {
        tmp();
      }
      require();
    },
    children: null
  };
  const items = [tmp.container, disableBackground.containerStyle, ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  const obj3 = { style: items, children: null };
  items[2] = disabled;
  let tmp2Result = null;
  if (tmp5Result.isThemeDark(theme)) {
    tmp2Result = null;
    if (!flag) {
      const obj4 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp2Result = tmp2(VisualEffectViewDefault, obj4);
    }
  }
  const items1 = [tmp2Result, , ];
  if (null != IconComponent) {
    const obj5 = { color: tmp.iconColor.color, size: "sm" };
    let tmp2Result3 = tmp2(IconComponent, obj5);
  } else {
    const obj6 = { source, color: tmp.iconColor.color, size: tmp5(1178).Icon.Sizes.SMALL_20 };
    tmp2Result3 = tmp2(tmp5(1178).Icon, obj6);
  }
  items1[1] = tmp2Result3;
  let tmp2Result4 = null != membersCount;
  if (tmp2Result4) {
    tmp2Result4 = membersCount > 0;
  }
  if (tmp2Result4) {
    const obj7 = { style: tmp.text, children: membersCount };
    tmp2Result4 = tmp2(tmp5(1178).LegacyText, obj7);
  }
  items1[2] = tmp2Result4;
  obj3.children = items1;
  const items2 = [closure_7(closure_3, obj3), children];
  obj2.children = items2;
  obj.children = closure_7(Pressables.PressableOpacity, obj2);
  return closure_6(closure_3, obj);
};
