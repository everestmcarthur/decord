// Module ID: 13451
// Function ID: 13452
// Name: useReferralIncentiveEligibility
// Dependencies: [4224, 8056, 13450, 504, 2]
// Exports: useReferralIncentiveEligibility

// Module 13451 (useReferralIncentiveEligibility)
import initialize from "initialize" /* 504 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8056 */;
import apexExperiment from "apexExperiment" /* 13450 */;
import closure_2 from "reset" /* 4224 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralIncentiveEligibility.tsx");

export const useReferralIncentiveEligibility = function useReferralIncentiveEligibility(location) {
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(true);
  const obj = useIsEligibleSenderForReferralProgram;
  const premiumReferralIncentivesVariant = apexExperiment.usePremiumReferralIncentivesVariant(location.location);
  ({ referralRewardType, useAltReferralCardArt } = premiumReferralIncentivesVariant);
  const obj2 = apexExperiment;
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let tmp8 = true === isEligibleSenderForReferralProgram;
  let isEligibleForIncentive = tmp8;
  if (tmp8) {
    isEligibleForIncentive = referralRewardType === tmp(13450).ReferralRewardType.ORBS;
  }
  if (tmp8) {
    tmp8 = referralRewardType === tmp(13450).ReferralRewardType.DISCOUNT;
  }
  if (tmp8) {
    tmp8 = tmp6;
  }
  if (tmp8) {
    tmp8 = tmp7;
  }
  if (!isEligibleForIncentive) {
    isEligibleForIncentive = tmp8;
  }
  return { isEligibleForIncentive, referralRewardType, useAltReferralCardArt };
};
