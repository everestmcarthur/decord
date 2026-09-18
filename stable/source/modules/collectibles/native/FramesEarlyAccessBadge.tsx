// Module ID: 13137
// Function ID: 13138
// Name: FramesEarlyAccessBadge
// Dependencies: [32, 19, 17, 21, 4560, 576, 4495, 1114, 11133, 4411, 8668, 4556, 8836, 7156, 2]
// Exports: default

// Module 13137 (FramesEarlyAccessBadge)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import LayerScope from "LayerScope" /* 7156 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8668 */;
import useTooltip from "useTooltip" /* 11133 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const hitSlop = { top: 14, bottom: 14, left: 14, right: 14 };
const createStyles = fn(4560);
let obj2 = { pillBase: { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.round, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8 }, pillDark: null, pillLight: null, text: null };
let obj3 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.round, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8 };
obj2.pillDark = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
obj2.pillLight = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
const obj5 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj2.text = { marginLeft: nativeDefault.space.PX_8, textTransform: "uppercase" };
let closure_10 = createStyles.createStyles(obj2);
function BadgeWithTooltip(tooltipPosition) {
  tooltipPosition = tooltipPosition.tooltipPosition;
  visible = undefined;
  closure_2 = undefined;
  const tmp3 = closure_10();
  const ref = noop.useRef(null);
  [visible, closure_2] = noop.useState(false);
  const intl = util.intl;
  const stringResult = intl.string(util.t["L9B+ZZ"]);
  c3 = stringResult;
  const onPress = noop.useCallback(() => {
    closure_2(false);
  }, []);
  const items = [tooltipPosition, stringResult, visible, onPress];
  const memo = noop.useMemo(() => ({ position: tooltipPosition, label, visible, onPress }), items);
  const tmp2 = useThemeDefault();
  const tooltip = useTooltip.useTooltip(ref, memo);
  const items1 = [visible];
  const effect = noop.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_2(false);
      }, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_2((arg0) => !arg0);
  }, []);
  const isThemeDarkResult = shared.isThemeDark(tmp2);
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl2 = tmp7(1114).intl;
  const stringResult1 = intl2.string(util.t["1m6qcO"]);
  const obj3 = { ref, onPress: callback1, hitSlop, accessibilityRole: "button", accessibilityLabel: stringResult1, accessibilityHint: stringResult, style: null, children: null };
  const items2 = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  obj3.style = items2;
  const items3 = [React5(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: str }), React5(Text_Text.Text, { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult1 })];
  obj3.children = items3;
  return React6(hasOwnProperty, obj3);
}
function StaticBadge() {
  const tmp3 = closure_10();
  const tmp2 = useThemeDefault();
  const isThemeDarkResult = shared.isThemeDark(tmp2);
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl = tmp4(1114).intl;
  const stringResult = intl.string(util.t["1m6qcO"]);
  const obj2 = { accessibilityLabel: stringResult, style: null, children: null };
  const items = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  obj2.style = items;
  const items1 = [React5(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: str }), React5(Text_Text.Text, { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult })];
  obj2.children = items1;
  return React6(timestampProducer, obj2);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FramesEarlyAccessBadge.tsx");

export default function _default(tooltipPosition) {
  let str = tooltipPosition.tooltipPosition;
  if (str === undefined) {
    str = "top";
  }
  let flag = tooltipPosition.inheritLayerScope;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tooltipPosition.disablePressable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (!obj.useIsProfileFramesEarlyAccessPhase(tooltipPosition.location)) {
    return null;
  } else if (flag2) {
    let tmp3Result = tmp3(StaticBadge, {});
  } else if (flag) {
    const obj2 = { tooltipPosition: str };
    tmp3Result = tmp3(BadgeWithTooltip, obj2);
  } else {
    const obj3 = { zIndex: 3, children: null };
    const obj4 = { tooltipPosition: str };
    obj3.children = tmp3(BadgeWithTooltip, obj4);
    tmp3Result = tmp3(LayerScope.LayerScope, obj3);
  }
};
