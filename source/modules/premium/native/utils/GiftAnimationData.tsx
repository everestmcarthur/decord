// Module ID: 10922
// Function ID: 10923
// Name: GiftAnimationData
// Dependencies: [1373, 8158, 10923, 10924, 10925, 10926, 10927, 10928, 10929, 10930, 10931, 10932, 10933, 10934, 10935, 10936, 10937, 10938, 10939, 10940, 10941, 10942, 10943, 10944, 10945, 10946, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10922 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8158 */;
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
      return tmp17(10923);
    } else if (tmp17(8158).AnimationState.LOOP === ACTION) {
      return tmp17(10924);
    } else {
      return tmp17(10925);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10926);
    } else if (tmp15(8158).AnimationState.LOOP === ACTION) {
      return tmp15(10927);
    } else {
      return tmp15(10928);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10929);
    } else if (tmp13(8158).AnimationState.LOOP === ACTION) {
      return tmp13(10930);
    } else {
      return tmp13(10931);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10932);
    } else if (tmp11(8158).AnimationState.LOOP === ACTION) {
      return tmp11(10933);
    } else {
      return tmp11(10934);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10935);
    } else if (tmp9(8158).AnimationState.LOOP === ACTION) {
      return tmp9(10936);
    } else {
      return tmp9(10937);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10938);
    } else if (tmp7(8158).AnimationState.LOOP === ACTION) {
      return tmp7(10939);
    } else {
      return tmp7(10940);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10941);
    } else if (tmp5(8158).AnimationState.LOOP === ACTION) {
      return tmp5(10942);
    } else {
      return tmp5(10943);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10944);
    } else if (tmp3(8158).AnimationState.LOOP === ACTION) {
      return tmp3(10945);
    } else {
      return tmp3(10946);
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
