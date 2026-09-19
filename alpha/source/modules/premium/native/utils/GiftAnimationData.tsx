// Module ID: 11092
// Function ID: 11093
// Name: GiftAnimationData
// Dependencies: [1374, 8339, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 11104, 11105, 11106, 11107, 11108, 11109, 11110, 11111, 11112, 11113, 11114, 11115, 11116, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11092 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8339 */;
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
      return tmp17(11093);
    } else if (tmp17(8339).AnimationState.LOOP === ACTION) {
      return tmp17(11094);
    } else {
      return tmp17(11095);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11096);
    } else if (tmp15(8339).AnimationState.LOOP === ACTION) {
      return tmp15(11097);
    } else {
      return tmp15(11098);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11099);
    } else if (tmp13(8339).AnimationState.LOOP === ACTION) {
      return tmp13(11100);
    } else {
      return tmp13(11101);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11102);
    } else if (tmp11(8339).AnimationState.LOOP === ACTION) {
      return tmp11(11103);
    } else {
      return tmp11(11104);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11105);
    } else if (tmp9(8339).AnimationState.LOOP === ACTION) {
      return tmp9(11106);
    } else {
      return tmp9(11107);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11108);
    } else if (tmp7(8339).AnimationState.LOOP === ACTION) {
      return tmp7(11109);
    } else {
      return tmp7(11110);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11111);
    } else if (tmp5(8339).AnimationState.LOOP === ACTION) {
      return tmp5(11112);
    } else {
      return tmp5(11113);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11114);
    } else if (tmp3(8339).AnimationState.LOOP === ACTION) {
      return tmp3(11115);
    } else {
      return tmp3(11116);
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
