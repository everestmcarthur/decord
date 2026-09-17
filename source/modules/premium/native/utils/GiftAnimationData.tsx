// Module ID: 10985
// Function ID: 10986
// Name: GiftAnimationData
// Dependencies: [1374, 8219, 10986, 10987, 10988, 10989, 10990, 10991, 10992, 10993, 10994, 10995, 10996, 10997, 10998, 10999, 11000, 11001, 11002, 11003, 11004, 11005, 11006, 11007, 11008, 11009, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10985 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8219 */;
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
      return tmp17(10986);
    } else if (tmp17(8219).AnimationState.LOOP === ACTION) {
      return tmp17(10987);
    } else {
      return tmp17(10988);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10989);
    } else if (tmp15(8219).AnimationState.LOOP === ACTION) {
      return tmp15(10990);
    } else {
      return tmp15(10991);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10992);
    } else if (tmp13(8219).AnimationState.LOOP === ACTION) {
      return tmp13(10993);
    } else {
      return tmp13(10994);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10995);
    } else if (tmp11(8219).AnimationState.LOOP === ACTION) {
      return tmp11(10996);
    } else {
      return tmp11(10997);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10998);
    } else if (tmp9(8219).AnimationState.LOOP === ACTION) {
      return tmp9(10999);
    } else {
      return tmp9(11000);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11001);
    } else if (tmp7(8219).AnimationState.LOOP === ACTION) {
      return tmp7(11002);
    } else {
      return tmp7(11003);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11004);
    } else if (tmp5(8219).AnimationState.LOOP === ACTION) {
      return tmp5(11005);
    } else {
      return tmp5(11006);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11007);
    } else if (tmp3(8219).AnimationState.LOOP === ACTION) {
      return tmp3(11008);
    } else {
      return tmp3(11009);
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
