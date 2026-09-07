// Module ID: 11049
// Function ID: 11050
// Name: useGiftingPromotionDefaultSelectionV2
// Dependencies: [2]
// Exports: useGiftingPromotionDefaultSelectionV2

// Module 11049 (useGiftingPromotionDefaultSelectionV2)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

export const useGiftingPromotionDefaultSelectionV2 = function useGiftingPromotionDefaultSelectionV2(claimableRewards, selectedGiftingPromotionReward) {
  if (null != claimableRewards) {
    if (0 !== claimableRewards.length) {
      let first = selectedGiftingPromotionReward;
      if (null == selectedGiftingPromotionReward) {
        first = claimableRewards[0];
      }
      return first;
    }
  }
};
