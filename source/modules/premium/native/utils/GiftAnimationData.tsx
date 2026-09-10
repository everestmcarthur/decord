// Module ID: 10901
// Function ID: 10902
// Name: GiftAnimationData
// Dependencies: [1373, 8135, 10902, 10903, 10904, 10905, 10906, 10907, 10908, 10909, 10910, 10911, 10912, 10913, 10914, 10915, 10916, 10917, 10918, 10919, 10920, 10921, 10922, 10923, 10924, 10925, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10901 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8135 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const LottieType = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = size.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export { LottieType };
export const getLottieType = function getLottieType(giftStyle) {
  if (giftStyle === PremiumGiftStyles.NITROWEEN_STANDARD) {
    let _JSON = obj.LOTTIE;
  } else {
    _JSON = obj.JSON;
  }
  return _JSON;
};
export const getGiftAnimationData = function getGiftAnimationData(giftStyle, ACTION) {
  if (PremiumGiftStyles.STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp17(10902);
    } else if (tmp17(8135).AnimationState.LOOP === ACTION) {
      return tmp17(10903);
    } else {
      return tmp17(10904);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10905);
    } else if (tmp15(8135).AnimationState.LOOP === ACTION) {
      return tmp15(10906);
    } else {
      return tmp15(10907);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10908);
    } else if (tmp13(8135).AnimationState.LOOP === ACTION) {
      return tmp13(10909);
    } else {
      return tmp13(10910);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10911);
    } else if (tmp11(8135).AnimationState.LOOP === ACTION) {
      return tmp11(10912);
    } else {
      return tmp11(10913);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10914);
    } else if (tmp9(8135).AnimationState.LOOP === ACTION) {
      return tmp9(10915);
    } else {
      return tmp9(10916);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10917);
    } else if (tmp7(8135).AnimationState.LOOP === ACTION) {
      return tmp7(10918);
    } else {
      return tmp7(10919);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10920);
    } else if (tmp5(8135).AnimationState.LOOP === ACTION) {
      return tmp5(10921);
    } else {
      return tmp5(10922);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10923);
    } else if (tmp3(8135).AnimationState.LOOP === ACTION) {
      return tmp3(10924);
    } else {
      return tmp3(10925);
    }
  } else {
    if (tmp.SNOWGLOBE !== giftStyle) {
      if (tmp.BOX !== giftStyle) {
        const CUP = tmp.CUP;
      }
    }
    const _Error = Error;
    throw Error();
  }
};
