// Module ID: 10960
// Function ID: 10961
// Name: GiftAnimationData
// Dependencies: [1373, 8187, 10961, 10962, 10963, 10964, 10965, 10966, 10967, 10968, 10969, 10970, 10971, 10972, 10973, 10974, 10975, 10976, 10977, 10978, 10979, 10980, 10981, 10982, 10983, 10984, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10960 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8187 */;
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
      return tmp17(10961);
    } else if (tmp17(8187).AnimationState.LOOP === ACTION) {
      return tmp17(10962);
    } else {
      return tmp17(10963);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10964);
    } else if (tmp15(8187).AnimationState.LOOP === ACTION) {
      return tmp15(10965);
    } else {
      return tmp15(10966);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10967);
    } else if (tmp13(8187).AnimationState.LOOP === ACTION) {
      return tmp13(10968);
    } else {
      return tmp13(10969);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10970);
    } else if (tmp11(8187).AnimationState.LOOP === ACTION) {
      return tmp11(10971);
    } else {
      return tmp11(10972);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10973);
    } else if (tmp9(8187).AnimationState.LOOP === ACTION) {
      return tmp9(10974);
    } else {
      return tmp9(10975);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10976);
    } else if (tmp7(8187).AnimationState.LOOP === ACTION) {
      return tmp7(10977);
    } else {
      return tmp7(10978);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10979);
    } else if (tmp5(8187).AnimationState.LOOP === ACTION) {
      return tmp5(10980);
    } else {
      return tmp5(10981);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10982);
    } else if (tmp3(8187).AnimationState.LOOP === ACTION) {
      return tmp3(10983);
    } else {
      return tmp3(10984);
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
