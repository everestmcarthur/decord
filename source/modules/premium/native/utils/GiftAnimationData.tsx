// Module ID: 10920
// Function ID: 10921
// Name: GiftAnimationData
// Dependencies: [1373, 8157, 10921, 10922, 10923, 10924, 10925, 10926, 10927, 10928, 10929, 10930, 10931, 10932, 10933, 10934, 10935, 10936, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 10944, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10920 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8157 */;
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
      return tmp17(10921);
    } else if (tmp17(8157).AnimationState.LOOP === ACTION) {
      return tmp17(10922);
    } else {
      return tmp17(10923);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10924);
    } else if (tmp15(8157).AnimationState.LOOP === ACTION) {
      return tmp15(10925);
    } else {
      return tmp15(10926);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10927);
    } else if (tmp13(8157).AnimationState.LOOP === ACTION) {
      return tmp13(10928);
    } else {
      return tmp13(10929);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10930);
    } else if (tmp11(8157).AnimationState.LOOP === ACTION) {
      return tmp11(10931);
    } else {
      return tmp11(10932);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10933);
    } else if (tmp9(8157).AnimationState.LOOP === ACTION) {
      return tmp9(10934);
    } else {
      return tmp9(10935);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10936);
    } else if (tmp7(8157).AnimationState.LOOP === ACTION) {
      return tmp7(10937);
    } else {
      return tmp7(10938);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10939);
    } else if (tmp5(8157).AnimationState.LOOP === ACTION) {
      return tmp5(10940);
    } else {
      return tmp5(10941);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10942);
    } else if (tmp3(8157).AnimationState.LOOP === ACTION) {
      return tmp3(10943);
    } else {
      return tmp3(10944);
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
