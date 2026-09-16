// Module ID: 10977
// Function ID: 10978
// Name: GiftAnimationData
// Dependencies: [1374, 8199, 10978, 10979, 10980, 10981, 10982, 10983, 10984, 10985, 10986, 10987, 10988, 10989, 10990, 10991, 10992, 10993, 10994, 10995, 10996, 10997, 10998, 10999, 11000, 11001, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10977 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8199 */;
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
      return tmp17(10978);
    } else if (tmp17(8199).AnimationState.LOOP === ACTION) {
      return tmp17(10979);
    } else {
      return tmp17(10980);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10981);
    } else if (tmp15(8199).AnimationState.LOOP === ACTION) {
      return tmp15(10982);
    } else {
      return tmp15(10983);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10984);
    } else if (tmp13(8199).AnimationState.LOOP === ACTION) {
      return tmp13(10985);
    } else {
      return tmp13(10986);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10987);
    } else if (tmp11(8199).AnimationState.LOOP === ACTION) {
      return tmp11(10988);
    } else {
      return tmp11(10989);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10990);
    } else if (tmp9(8199).AnimationState.LOOP === ACTION) {
      return tmp9(10991);
    } else {
      return tmp9(10992);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10993);
    } else if (tmp7(8199).AnimationState.LOOP === ACTION) {
      return tmp7(10994);
    } else {
      return tmp7(10995);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10996);
    } else if (tmp5(8199).AnimationState.LOOP === ACTION) {
      return tmp5(10997);
    } else {
      return tmp5(10998);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10999);
    } else if (tmp3(8199).AnimationState.LOOP === ACTION) {
      return tmp3(11000);
    } else {
      return tmp3(11001);
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
