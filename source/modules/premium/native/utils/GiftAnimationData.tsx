// Module ID: 10836
// Function ID: 10837
// Name: LottieType
// Dependencies: [1373, 8082, 10837, 10838, 10839, 10840, 10841, 10842, 10843, 10844, 10845, 10846, 10847, 10848, 10849, 10850, 10851, 10852, 10853, 10854, 10855, 10856, 10857, 10858, 10859, 10860, 2]
// Exports: getGiftAnimationData, getLottieType

// Module 10836 (LottieType)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import _sendGiftMessage from "_sendGiftMessage" /* 8082 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const obj = { JSON: 0, [0]: "JSON", LOTTIE: 1, [1]: "LOTTIE" };
const result = set.fileFinishedImporting("modules/premium/native/utils/GiftAnimationData.tsx");

export const LottieType = obj;
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
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp17(10837);
    } else if (tmp17(8082).AnimationState.LOOP === ACTION) {
      return tmp17(10838);
    } else {
      return tmp17(10839);
    }
  } else if (tmp.CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp15(10840);
    } else if (tmp15(8082).AnimationState.LOOP === ACTION) {
      return tmp15(10841);
    } else {
      return tmp15(10842);
    }
  } else if (tmp.CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp13(10843);
    } else if (tmp13(8082).AnimationState.LOOP === ACTION) {
      return tmp13(10844);
    } else {
      return tmp13(10845);
    }
  } else if (tmp.COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp11(10846);
    } else if (tmp11(8082).AnimationState.LOOP === ACTION) {
      return tmp11(10847);
    } else {
      return tmp11(10848);
    }
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp9(10849);
    } else if (tmp9(8082).AnimationState.LOOP === ACTION) {
      return tmp9(10850);
    } else {
      return tmp9(10851);
    }
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp7(10852);
    } else if (tmp7(8082).AnimationState.LOOP === ACTION) {
      return tmp7(10853);
    } else {
      return tmp7(10854);
    }
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp5(10855);
    } else if (tmp5(8082).AnimationState.LOOP === ACTION) {
      return tmp5(10856);
    } else {
      return tmp5(10857);
    }
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    if (_sendGiftMessage.AnimationState.IDLE === ACTION) {
      return tmp3(10858);
    } else if (tmp3(8082).AnimationState.LOOP === ACTION) {
      return tmp3(10859);
    } else {
      return tmp3(10860);
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
