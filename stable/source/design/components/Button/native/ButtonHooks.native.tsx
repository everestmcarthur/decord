// Module ID: 4981
// Function ID: 4982
// Name: ButtonHooks
// Dependencies: [19, 4560, 4271, 576, 4411, 4262, 4296, 4974, 4978, 4980, 4982, 4977, 4556, 1115, 2]
// Exports: useButtonPillStyles, useButtonPressAnimationProps, useButtonScaleStyles, useButtonTextColorStyles, useForegroundColor, useGradientPillStyles, useIconSizeStyles, useIconTintStyles, useProfileThemedButtonStyles

// Module 4981 (ButtonHooks)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import shared from "shared" /* 4411 */;
import spring from "spring" /* 4974 */;
import Icon from "Icon" /* 4977 */;
import springPresets from "springPresets" /* 4978 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let c4 = "rgba(0,0,0,0.001)";
let createStyles = fn(4560);
const backgroundInactive = createStyles.experimental_createToken(() => "#161CBB");
createStyles = fn(4560);
const backgroundPressed = createStyles.experimental_createToken(() => "#1318A0");
let obj3 = { primary: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, "experimental_welcome-secondary": nativeDefault.unsafe_rawColors.WHITE, secondary: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-primary": nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-secondary": nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: nativeDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, "primary-overlay": nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, "secondary-overlay": nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, "experimental_premium-primary": nativeDefault.colors.WHITE, "experimental_premium-basic": nativeDefault.colors.WHITE, "experimental_premium-secondary": nativeDefault.colors.TEXT_BRAND, "icon-only": nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: nativeDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
createStyles = fn(4560);
const styleProperties = createStyles.createStyleProperties((arg0) => {
  switch (arg0) {
    case "primary":
      const obj2 = { backgroundInactive: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_PRIMARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_PRIMARY_BORDER_ACTIVE };
      return obj2;
    case "secondary":
      obj3 = { backgroundInactive: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_SECONDARY_BORDER_ACTIVE };
      return obj3;
    case "tertiary":
      const obj4 = { backgroundInactive: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, backgroundPressed: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj4;
    case "critical-primary":
      let obj5 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp26 = nativeDefault;
      obj5.backgroundInactive = tmp26.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      let tmp27 = nativeDefault;
      obj5.backgroundPressed = tmp27.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      let tmp28 = nativeDefault;
      obj5.borderInactive = tmp28.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      let tmp29 = nativeDefault;
      obj5.borderPressed = tmp29.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj5;
    case "destructive":
      obj5 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp26 = nativeDefault;
      obj5.backgroundInactive = tmp26.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT;
      tmp27 = nativeDefault;
      obj5.backgroundPressed = tmp27.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_ACTIVE;
      tmp28 = nativeDefault;
      obj5.borderInactive = tmp28.colors.CONTROL_CRITICAL_PRIMARY_BORDER_DEFAULT;
      tmp29 = nativeDefault;
      obj5.borderPressed = tmp29.colors.CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE;
      return obj5;
    case "critical-secondary":
      const obj6 = { backgroundInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CRITICAL_SECONDARY_BORDER_ACTIVE };
      return obj6;
    case "active":
      const obj7 = { backgroundInactive: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_ACTIVE, borderInactive: nativeDefault.colors.CONTROL_CONNECTED_BORDER_DEFAULT, borderPressed: nativeDefault.colors.CONTROL_CONNECTED_BORDER_ACTIVE };
      return obj7;
    case "experimental_premium-secondary":
      let obj8 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp17 = nativeDefault;
      obj8.backgroundInactive = tmp17.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
      let tmp18 = nativeDefault;
      obj8.backgroundPressed = tmp18.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE;
      obj8.borderInactive = rgba0000001;
      obj8.borderPressed = rgba0000001;
      return obj8;
    case "primary-overlay":
      obj8 = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp17 = nativeDefault;
      obj8.backgroundInactive = tmp17.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
      tmp18 = nativeDefault;
      obj8.backgroundPressed = tmp18.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE;
      obj8.borderInactive = rgba0000001;
      obj8.borderPressed = rgba0000001;
      return obj8;
    case "secondary-overlay":
      const obj9 = { backgroundInactive: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, backgroundPressed: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj9;
    case "experimental_welcome-secondary":
      const obj10 = { backgroundInactive, backgroundPressed, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj10;
    case "experimental_premium-primary":
      let obj11 = { backgroundInactive: rgba0000001, backgroundPressed: null, borderInactive: null, borderPressed: null };
      let tmp8 = nativeDefault;
      obj11.backgroundPressed = tmp8.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj11.borderInactive = rgba0000001;
      obj11.borderPressed = rgba0000001;
      return obj11;
    case "experimental_premium-basic":
      obj11 = { backgroundInactive: rgba0000001, backgroundPressed: null, borderInactive: null, borderPressed: null };
      tmp8 = nativeDefault;
      obj11.backgroundPressed = tmp8.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PRESSED_BACKGROUND;
      obj11.borderInactive = rgba0000001;
      obj11.borderPressed = rgba0000001;
      return obj11;
    case "icon-only":
      const obj12 = { backgroundInactive: rgba0000001, backgroundPressed: nativeDefault.colors.CONTROL_ICON_ONLY_BACKGROUND_ACTIVE, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj12;
    case "expressive":
      const obj = { backgroundInactive: rgba0000001, backgroundPressed: rgba0000001, borderInactive: rgba0000001, borderPressed: rgba0000001 };
      return obj;
    default:
  }
});
const __initData = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
const __initData2 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = function useProfileThemedButtonStyles(arg0) {
  _require = arg0;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  return noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(tmp, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === tmp45) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  return useToken.useToken(obj3[variant]);
};
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = function useButtonTextColorStyles(active) {
  _require = active;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, active];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(tmp, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === tmp45) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
  const obj = require("native");
  let color;
  const token = require("useToken").useToken(obj3[active]);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(variant) {
  _require = variant;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(tmp, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === tmp45) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
  const obj = require("native");
  let tintColor;
  const token = require("useToken").useToken(obj3[variant]);
  if (memo != null) {
    tintColor = memo.color;
  }
  if (tintColor == null) {
    tintColor = token;
  }
  return { tintColor };
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  _require = pressed;
  closure_129_0 = variant;
  const themeContext = require("native").useThemeContext();
  const primaryColor = themeContext.primaryColor;
  closure_129_1 = primaryColor;
  const theme = themeContext.theme;
  closure_129_2 = theme;
  let items = [theme, primaryColor, variant];
  const memo = noop.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === closure_0) {
      const WHITE = nativeDefault.unsafe_rawColors.WHITE;
      const obj4 = { base: WHITE, contrastRatio: native.WCAGContrastRatios.HighContrastText };
      const contrastingColor = native.getContrastingColor(tmp, obj4);
      const darkenColorResult = native.darkenColor(contrastingColor, 0.5);
      const obj7 = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj7.backgroundColor = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj7.borderColor = items1;
      obj7.color = WHITE;
      return obj7;
    } else if ("secondary" === tmp45) {
      const tmp20 = closure_2;
      const isThemeLightResult = shared.isThemeLight(closure_2);
      const setColorOpacity2 = native.setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const isThemeLightResult1 = shared.isThemeLight(tmp20);
      const setColorOpacity3 = native.setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      const obj9 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj9.backgroundColor = items2;
      const items3 = [c4, c4];
      obj9.borderColor = items3;
      return obj9;
    } else if ("tertiary" === tmp45) {
      const isThemeLightResult2 = shared.isThemeLight(closure_2);
      const setColorOpacity = native.setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj3 = native;
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj3.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj3.setColorOpacity("white", 0.2);
      }
      const obj11 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj11.backgroundColor = items4;
      const items5 = [c4, c4];
      obj11.borderColor = items5;
      return obj11;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  dependencyMap = tmp3;
  let obj = require("native");
  const fn = function s() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = tmp.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = closure_2);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = closure_2);
      borderColor = items1;
    }
    const obj = { backgroundColor: ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], backgroundColor), borderColor: null };
    obj.borderColor = ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], borderColor);
    return obj;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { themedStyles: memo, colors: tmp3, interpolateColor: require("ReanimatedRexport").interpolateColor, pressed };
  fn.__workletHash = 2383933325137;
  fn.__initData = __initData;
  return obj2.useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  _require = pressed;
  closure_1 = width;
  dependencyMap = scaleAmountInPx;
  const fn = function n() {
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    const obj2 = { transform: null };
    obj3 = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    const items1 = [obj3];
    obj2.transform = items1;
    return obj2;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { width, scaleAmountInPx, withSpring: require("spring").withSpring, interpolate: require("ReanimatedRexport").interpolate, pressed, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__workletHash = 17256006845494;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  num = onPressOut;
  sharedValue = undefined;
  sharedValue = sharedValue(num[6]).useSharedValue(0);
  const obj = sharedValue(num[6]);
  const sharedValue1 = sharedValue(num[6]).useSharedValue(0);
  let obj2 = { onPressIn: null, onPressOut: null, onLayout: null, style: null };
  let items = [sharedValue, onPressIn];
  obj2.onPressIn = sharedValue.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (sharedValue1 != null) {
      tmp2(arg0);
    }
  }, items);
  let items1 = [sharedValue, onPressOut];
  obj2.onPressOut = sharedValue.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (num != null) {
      tmp2(arg0);
    }
  }, items1);
  const items2 = [sharedValue1, onLayout];
  obj2.onLayout = sharedValue.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    if (sharedValue != null) {
      tmp2(nativeEvent);
    }
  }, items2);
  const tmpResult = sharedValue(num[6]);
  const fn = function n() {
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    const obj2 = { transform: null };
    obj3 = { scale: null };
    const obj4 = spring;
    const items = [1, num];
    obj3.scale = obj4.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    const items1 = [obj3];
    obj2.transform = items1;
    return obj2;
  };
  const tmpResult2 = sharedValue(num[6]);
  fn.__closure = { width: sharedValue1, scaleAmountInPx: num, withSpring: sharedValue(num[7]).withSpring, interpolate: sharedValue(num[6]).interpolate, pressed: sharedValue, ON_PRESS_SPRING: sharedValue(num[8]).ON_PRESS_SPRING };
  fn.__workletHash = 17256006845494;
  fn.__initData = __initData2;
  obj2.style = tmpResult2.useAnimatedStyle(fn);
  return obj2;
};
export const useIconSizeStyles = (arg0) => {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = require("ButtonConstants").BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const fontScale = require("useFontScale").useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    Icon;
    if ("sm" === closure_0) {
      let iconSize = tmp(4977).getIconSize(tmp(4980).SMALL_BUTTON_ICON_SIZE);
      const tmpResult = tmp(4977);
    } else {
      iconSize = tmp4;
      if ("lg" === tmp5) {
        iconSize = tmp(4977).getIconSize(tmp(4980).LARGE_BUTTON_ICON_SIZE);
        const tmpResult4 = tmp(4977);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult5 = tmp(4980);
        const tmp13 = tmp(4556).TextStyleSheet[tmpResult5.getButtonDefaultTextVariant(tmpResult5, tmp5)];
        const tmp9 = tmp(1115).isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult6 = tmp(1115);
      }
    }
    return { width, height: width };
  }, items);
};
