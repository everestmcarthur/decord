// Module ID: 10757
// Function ID: 10758
// Name: useShouldShowGiftingPromotionDeco
// Dependencies: [1373, 10704, 2]
// Exports: default

// Module 10757 (useShouldShowGiftingPromotionDeco)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import NativeGiftContextProvider from "NativeGiftContextProvider" /* 10704 */;

const PremiumTypes = GuildFeatures.PremiumTypes;
const result = set.fileFinishedImporting("modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx");

export default function useShouldShowGiftingPromotionDeco(arg0) {
  const nativeGiftContext = NativeGiftContextProvider.useNativeGiftContext();
  const claimableRewards = nativeGiftContext.claimableRewards;
  if (null != arg0) {
    let tmp4 = arg0 === PremiumTypes.TIER_2;
  } else {
    tmp4 = tmp2 === PremiumTypes.TIER_2;
  }
  let tmp6 = null != claimableRewards;
  if (tmp6) {
    tmp6 = claimableRewards.length > 0;
  }
  if (tmp6) {
    tmp6 = tmp4;
  }
  return tmp6;
};
