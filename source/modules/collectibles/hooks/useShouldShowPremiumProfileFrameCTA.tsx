// Module ID: 13164
// Function ID: 13165
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [13165, 8835, 1889, 2]
// Exports: default

// Module 13164 (useShouldShowPremiumProfileFrameCTA)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import useCanPurchaseFramesDefault from "useCanPurchaseFrames" /* 8835 */;
import useShouldShowPremiumProfileFrameEADefault from "useShouldShowPremiumProfileFrameEA" /* 13165 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEADefault(_location) && !useCanPurchaseFramesDefault(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
