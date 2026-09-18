// Module ID: 12057
// Function ID: 12058
// Name: ReferralMessageUtils
// Dependencies: [4386, 7646, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12057 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4386 */;
import UserOfferStore from "UserOfferStore" /* 7646 */;

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
