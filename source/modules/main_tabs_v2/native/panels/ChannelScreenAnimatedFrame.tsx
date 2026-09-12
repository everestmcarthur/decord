// Module ID: 16104
// Function ID: 16105
// Name: ChannelScreenAnimatedFrame
// Dependencies: [19, 17, 7967, 21, 4636, 576, 4373, 4637, 1178, 16102, 7975, 7226, 2]
// Exports: default

// Module 16104 (ChannelScreenAnimatedFrame)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import timing from "timing" /* 4637 */;
import PanelsConfig from "PanelsConfig" /* 16102 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, splitDivider: null, additionalHeight: null };
const obj3 = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.splitDivider = { borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
obj2.additionalHeight = { height: fn(7967).HEADER_CORNER_RADIUS };
let closure_6 = createStyles.createStyles(obj2);
const __initData = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = closure_6();
  class D {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[7]);
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj1 = { easing: tmp2(tmp3[8]).STANDARD_EASING, duration: null };
      tmp2Result = tmp2(tmp3[9]);
      obj4 = { opacity: obj.withTiming(num, obj1) };
      obj1.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
      return obj4;
    }
  }
  let obj = translateX(isChatLockedOpen[6]);
  D.__closure = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[7]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS };
  D.__workletHash = 9063010717249;
  D.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(D);
  let obj2 = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[7]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[8]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[9]).SIDE_PANEL_OPEN_DURATION_MS };
  const gradientTop = translateX(isChatLockedOpen[10]).useGradientTop();
  const obj4 = { pointerEvents: "none", style: null, children: null };
  const items = [, , , ];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  items[2] = gradientTop;
  items[3] = animatedStyle;
  obj4.style = items;
  const items1 = [closure_4(translateX(isChatLockedOpen[11]).SafeAreaPaddingView, { top: true }), closure_4(View, { style: tmp.additionalHeight })];
  obj4.children = items1;
  return closure_5(maxWidth(isChatLockedOpen[6]).View, obj4);
};
