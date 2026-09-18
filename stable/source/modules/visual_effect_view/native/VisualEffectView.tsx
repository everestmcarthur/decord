// Module ID: 4965
// Function ID: 4966
// Name: VisualEffectView
// Dependencies: [19, 17, 4966, 21, 1115, 4967, 4262, 576, 4970, 2]
// Exports: isBlurDisabled

// Module 4965 (VisualEffectView)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import VisualEffectViewAndroid from "VisualEffectViewAndroid" /* 4970 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(4966).useVisualEffectViewOverrides;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let closure_6 = PlatformUtils.isAndroid();
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectView.tsx");

export default noop.forwardRef(function VisualEffectView(blurAmount, ref) {
  ({ blurTheme, blurStyle } = blurAmount);
  if (blurStyle === undefined) {
    blurStyle = "default";
  }
  let num = blurAmount.blurAmount;
  if (num === undefined) {
    num = 1;
  }
  ({ tintColor, android_fallbackColor, android_blurTargetViewNativeId, android_softwareBlurDisabled } = blurAmount);
  if (android_softwareBlurDisabled === undefined) {
    android_softwareBlurDisabled = false;
  }
  const merged = Object.assign(blurAmount, Object.assign({ blurTheme: 0, blurStyle: 0, blurAmount: 0, tintColor: 0, android_fallbackColor: 0, android_blurTargetViewNativeId: 0, android_softwareBlurDisabled: 0 }));
  ({ blurAmountOverride, tintColorOverride, blurEffectNameOverride } = closure_4());
  const tmp2 = closure_4();
  const token = useToken.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_DEFAULT, blurTheme);
  let token1 = useToken.useToken(nativeDefault.colors.LEGACY_BLUR_FALLBACK_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token1 = token;
  }
  const items = [{ backgroundColor: token1 }, merged.style, ];
  let tmp8;
  if (null != android_fallbackColor) {
    const obj3 = { backgroundColor: android_fallbackColor };
    tmp8 = obj3;
  }
  items[2] = tmp8;
  const token2 = useToken.useToken(tmp5(576).colors.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT, blurTheme);
  const tmp3Result = useToken;
  let token3 = useToken.useToken(tmp5(576).colors.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN, blurTheme);
  if ("default" === blurStyle) {
    token3 = token2;
  }
  let tmp12 = closure_6;
  if (closure_6) {
    let tmp13 = null == android_blurTargetViewNativeId;
    if (!tmp13) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !tmp3(4970).MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp13 = true === android_softwareBlurDisabled;
    }
    tmp12 = tmp13;
  }
  if (tmp12) {
    const obj4 = { ref };
    const merged1 = Object.assign(merged);
    obj4.style = items;
    let tmp14Result = tmp14(View, obj4);
  } else if (closure_6) {
    const obj5 = { ref, blurAmount: null, blurTintIOSParityCompensationColor: null, tintColor: null, blurTargetViewNativeId: null };
    if (blurAmountOverride == null) {
      if (null == num) {
        let num2 = 1;
        if ("light" === blurTheme) {
          num2 = 0.85;
        }
        num = num2;
      }
      blurAmountOverride = num;
    }
    obj5.blurAmount = blurAmountOverride;
    obj5.blurTintIOSParityCompensationColor = token3;
    if (tintColorOverride == null) {
      tintColorOverride = tintColor;
    }
    obj5.tintColor = tintColorOverride;
    obj5.blurTargetViewNativeId = android_blurTargetViewNativeId;
    const merged2 = Object.assign(merged);
    tmp14Result = tmp14(tmp5(4970), obj5);
    const tmp5Result = tmp5(4970);
  } else {
    const obj6 = { ref, blurEffectName: null, blurAmount: null, tintColor: null };
    if (blurEffectNameOverride != null) {
      obj6.blurEffectName = blurEffectNameOverride;
      let tmp17 = blurAmountOverride;
      if (blurAmountOverride == null) {
        tmp17 = num;
      }
      obj6.blurAmount = tmp17;
      let tmp18 = tintColorOverride;
      if (tintColorOverride == null) {
        tmp18 = tintColor;
      }
      obj6.tintColor = tmp18;
      const merged3 = Object.assign(merged);
      tmp14Result = tmp14(tmp15, obj6);
    } else {
      if (!tmp3(4967).MODERN_IOS_BLURS_EFFECTS_AVAILABLE) {
        let str2 = "UIBlurEffectStyleDark";
        if ("light" === blurTheme) {
          str2 = "UIBlurEffectStyleLight";
        }
      }
      let str4 = "UIBlurEffectStyleSystemUltraThinMaterialDark";
      if ("light" === blurTheme) {
        str4 = "UIBlurEffectStyleSystemUltraThinMaterialLight";
      }
    }
  }
  return tmp14Result;
});
export const isBlurDisabled = function isBlurDisabled(merged) {
  let android_softwareBlurDisabled = merged.android_softwareBlurDisabled;
  let tmp2 = closure_6;
  if (closure_6) {
    let tmp4 = null == tmp;
    if (!tmp4) {
      if (android_softwareBlurDisabled) {
        android_softwareBlurDisabled = !VisualEffectViewAndroid.MODERN_ANDROID_BLURRING_AVAILABLE;
      }
      tmp4 = true === android_softwareBlurDisabled;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
