// Module ID: 11079
// Function ID: 11080
// Name: GiftAnimationData
// Dependencies: [1374, 8301, 11080, 11081, 11082, 11083, 11084, 11085, 11086, 11087, 11088, 11089, 11090, 11091, 11092, 11093, 11094, 11095, 11096, 11097, 11098, 11099, 11100, 11101, 11102, 11103, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 11079 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8301 */;
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
      return tmp17(11080);
    } else if (tmp17(8301).AnimationState.LOOP === ACTION) {
      return tmp17(11081);
    } else {
      return tmp17(11082);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(11083);
    } else if (tmp15(8301).AnimationState.LOOP === ACTION) {
      return tmp15(11084);
    } else {
      return tmp15(11085);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(11086);
    } else if (tmp13(8301).AnimationState.LOOP === ACTION) {
      return tmp13(11087);
    } else {
      return tmp13(11088);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(11089);
    } else if (tmp11(8301).AnimationState.LOOP === ACTION) {
      return tmp11(11090);
    } else {
      return tmp11(11091);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(11092);
    } else if (tmp9(8301).AnimationState.LOOP === ACTION) {
      return tmp9(11093);
    } else {
      return tmp9(11094);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(11095);
    } else if (tmp7(8301).AnimationState.LOOP === ACTION) {
      return tmp7(11096);
    } else {
      return tmp7(11097);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(11098);
    } else if (tmp5(8301).AnimationState.LOOP === ACTION) {
      return tmp5(11099);
    } else {
      return tmp5(11100);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(11101);
    } else if (tmp3(8301).AnimationState.LOOP === ACTION) {
      return tmp3(11102);
    } else {
      return tmp3(11103);
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
