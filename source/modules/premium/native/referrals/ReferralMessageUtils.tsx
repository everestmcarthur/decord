// Module ID: 11957
// Function ID: 11958
// Name: ReferralMessageUtils
// Dependencies: [4301, 7560, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11957 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4301 */;
import UserOfferStore from "UserOfferStore" /* 7560 */;

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
