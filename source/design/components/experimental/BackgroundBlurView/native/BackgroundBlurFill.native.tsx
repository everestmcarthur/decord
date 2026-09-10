// Module ID: 8630
// Function ID: 8631
// Name: BackgroundBlurFill
// Dependencies: [19, 17, 21, 576, 4423, 4284, 4275, 4979, 4978, 4310, 4988, 4992, 2]
// Exports: BackgroundBlurFill, BackgroundBlurFillAnimated, BackgroundBlurFillWithPress

// Module 8630 (BackgroundBlurFill)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 4978 */;
import VisualEffectViewDefault from "VisualEffectView" /* 4979 */;
import spring from "spring" /* 4988 */;
import springPresets from "springPresets" /* 4992 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = fn(4423);
let closure_6 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = fn(4423);
let closure_7 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = fn(4423);
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = fn(4423);
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.5);
const __initData = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData2 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = fn(4979).BlurTheme;
export const BlurStyle = fn(4979).BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if ("light" === blurTheme) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = obj2.useMemo(() => "light" === blurTheme ? closure_6 : closure_8, items1);
  }
  obj = blurTheme(4284);
  obj2 = noop;
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, blurTheme);
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj3.style = items2;
  return jsx(VisualEffectViewDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if ("light" === blurTheme) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = obj2.useMemo(() => "light" === blurTheme ? closure_6 : closure_8, items1);
  }
  obj = blurTheme(4284);
  obj2 = noop;
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, blurTheme);
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj3.style = items2;
  let tmp6 = null != animatedProps;
  const tmp4 = jsx;
  tmpResult = blurTheme(4275);
  if (tmp6) {
    const obj4 = { animatedProps };
    tmp6 = obj4;
  }
  const merged = Object.assign(tmp6);
  return tmp4(VisualEffectViewAnimatedDefault, obj3);
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  ({ blurTheme, pressed } = style);
  blurTheme = pressed;
  importDefault = undefined;
  dependencyMap = undefined;
  let token;
  let token1;
  c5 = undefined;
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  let items = [blurTheme];
  const tmp6 = "light" === blurTheme ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp7 = "light" === blurTheme ? closure_7 : closure_9;
  dependencyMap = tmp7;
  const memo = token.useMemo(() => {
    let str = "ultra-thin";
    if ("light" === blurTheme) {
      str = "default";
    }
    return str;
  }, items);
  obj = blurTheme(4284);
  token = blurTheme(4275).useToken(nativeDefault.colors.BACKGROUND_SCRIM, blurTheme);
  const tmp2Result = blurTheme(4275);
  token1 = blurTheme(4275).useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, blurTheme);
  const tmp2Result5 = blurTheme(4275);
  const isBlurDisabledResult = blurTheme(4979).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const tmp2Result6 = blurTheme(4979);
  class B {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[10]);
      obj3 = closure_0(closure_2[9]);
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      interpolateColorResult = obj3.interpolateColor(theme.get(), [0, 1], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, closure_0(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  const tmp2Result7 = blurTheme(4310);
  B.__closure = { withSpring: blurTheme(4988).withSpring, interpolateColor: blurTheme(4310).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: blurTheme(4992).ON_PRESS_SPRING };
  B.__workletHash = 10497618157620;
  B.__initData = __initData;
  let animatedStyle = tmp2Result7.useAnimatedStyle(B);
  let obj2 = { withSpring: blurTheme(4988).withSpring, interpolateColor: blurTheme(4310).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: blurTheme(4992).ON_PRESS_SPRING };
  class C {
    constructor() {
      withSpringResult = undefined;
      if (!closure_5) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[10]);
        obj2 = closure_0(closure_2[9]);
        tmp4 = theme;
        tmp5 = closure_1;
        items = [, ];
        items[0] = closure_1;
        tmp6 = closure_2;
        items[1] = closure_2;
        interpolateColorResult = obj2.interpolateColor(theme.get(), [0, 1], items);
        str = "animate-always";
        withSpringResult = obj.withSpring(interpolateColorResult, closure_0(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      }
      return { tintColor: withSpringResult };
    }
  }
  const tmp2Result8 = blurTheme(4310);
  C.__closure = { shouldUseFallback: isBlurDisabledResult, withSpring: blurTheme(4988).withSpring, interpolateColor: blurTheme(4310).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: blurTheme(4992).ON_PRESS_SPRING };
  C.__workletHash = 11987567486157;
  C.__initData = __initData2;
  const animatedProps = tmp2Result8.useAnimatedProps(C);
  const obj4 = { blurTheme, blurStyle: memo, style: null };
  const items1 = [token1.absoluteFill, style.style, ];
  let obj3 = { shouldUseFallback: isBlurDisabledResult, withSpring: blurTheme(4988).withSpring, interpolateColor: blurTheme(4310).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: blurTheme(4992).ON_PRESS_SPRING };
  const tmp12 = c5;
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items1[2] = animatedStyle;
  obj4.style = items1;
  let tmp14 = !isBlurDisabledResult;
  if (!isBlurDisabledResult) {
    const obj5 = { animatedProps };
    tmp14 = obj5;
  }
  const merged1 = Object.assign(tmp14);
  return tmp12(VisualEffectViewAnimatedDefault, obj4);
};
