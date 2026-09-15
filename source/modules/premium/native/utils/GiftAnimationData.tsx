// Module ID: 10964
// Function ID: 10965
// Name: GiftAnimationData
// Dependencies: [1374, 8190, 10965, 10966, 10967, 10968, 10969, 10970, 10971, 10972, 10973, 10974, 10975, 10976, 10977, 10978, 10979, 10980, 10981, 10982, 10983, 10984, 10985, 10986, 10987, 10988, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10964 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8190 */;
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
      return tmp17(10965);
    } else if (tmp17(8190).AnimationState.LOOP === ACTION) {
      return tmp17(10966);
    } else {
      return tmp17(10967);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10968);
    } else if (tmp15(8190).AnimationState.LOOP === ACTION) {
      return tmp15(10969);
    } else {
      return tmp15(10970);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10971);
    } else if (tmp13(8190).AnimationState.LOOP === ACTION) {
      return tmp13(10972);
    } else {
      return tmp13(10973);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10974);
    } else if (tmp11(8190).AnimationState.LOOP === ACTION) {
      return tmp11(10975);
    } else {
      return tmp11(10976);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10977);
    } else if (tmp9(8190).AnimationState.LOOP === ACTION) {
      return tmp9(10978);
    } else {
      return tmp9(10979);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10980);
    } else if (tmp7(8190).AnimationState.LOOP === ACTION) {
      return tmp7(10981);
    } else {
      return tmp7(10982);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10983);
    } else if (tmp5(8190).AnimationState.LOOP === ACTION) {
      return tmp5(10984);
    } else {
      return tmp5(10985);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10986);
    } else if (tmp3(8190).AnimationState.LOOP === ACTION) {
      return tmp3(10987);
    } else {
      return tmp3(10988);
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
