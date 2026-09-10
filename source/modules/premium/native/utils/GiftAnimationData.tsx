// Module ID: 10863
// Function ID: 10864
// Name: GiftAnimationData
// Dependencies: [1373, 8097, 10864, 10865, 10866, 10867, 10868, 10869, 10870, 10871, 10872, 10873, 10874, 10875, 10876, 10877, 10878, 10879, 10880, 10881, 10882, 10883, 10884, 10885, 10886, 10887, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10863 (GiftAnimationData)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 8097 */;
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
      return tmp17(10864);
    } else if (tmp17(8097).AnimationState.LOOP === ACTION) {
      return tmp17(10865);
    } else {
      return tmp17(10866);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp15(10867);
    } else if (tmp15(8097).AnimationState.LOOP === ACTION) {
      return tmp15(10868);
    } else {
      return tmp15(10869);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp13(10870);
    } else if (tmp13(8097).AnimationState.LOOP === ACTION) {
      return tmp13(10871);
    } else {
      return tmp13(10872);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp11(10873);
    } else if (tmp11(8097).AnimationState.LOOP === ACTION) {
      return tmp11(10874);
    } else {
      return tmp11(10875);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp9(10876);
    } else if (tmp9(8097).AnimationState.LOOP === ACTION) {
      return tmp9(10877);
    } else {
      return tmp9(10878);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp7(10879);
    } else if (tmp7(8097).AnimationState.LOOP === ACTION) {
      return tmp7(10880);
    } else {
      return tmp7(10881);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp5(10882);
    } else if (tmp5(8097).AnimationState.LOOP === ACTION) {
      return tmp5(10883);
    } else {
      return tmp5(10884);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (PremiumGiftingUtils.AnimationState.IDLE === ACTION) {
      return tmp3(10885);
    } else if (tmp3(8097).AnimationState.LOOP === ACTION) {
      return tmp3(10886);
    } else {
      return tmp3(10887);
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
