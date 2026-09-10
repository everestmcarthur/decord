// Module ID: 11845
// Function ID: 11846
// Name: ReferralMessageUtils
// Dependencies: [4237, 7464, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11845 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4237 */;
import UserOfferStore from "UserOfferStore" /* 7464 */;

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
