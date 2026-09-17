// Module ID: 11966
// Function ID: 11967
// Name: ReferralMessageUtils
// Dependencies: [4303, 7564, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11966 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4303 */;
import UserOfferStore from "UserOfferStore" /* 7564 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
