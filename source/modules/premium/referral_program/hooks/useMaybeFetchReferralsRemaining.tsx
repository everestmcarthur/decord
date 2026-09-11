// Module ID: 8133
// Function ID: 8134
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1371, 7526, 1373, 504, 8134, 8135, 7467, 1885, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 8133 (useMaybeFetchReferralsRemaining)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7526 */;

const require = fn;
const PremiumConstants = fn(1373);
({ PremiumTypes: metroRequire, FractionalPremiumStates: closure_7 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx");

export const useMaybeFetchReferralsRemaining = function useMaybeFetchReferralsRemaining(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let fetched;
  const items = [UserStore];
  const stateFromStores = flag(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = flag(504);
  let tmp = flag;
  const hasDiscountApplied = flag(8134).useHasDiscountApplied();
  const obj2 = flag(8134);
  const hasActiveTrial = flag(8135).useHasActiveTrial();
  const tmp6 = fetched(7467)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1885).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const tmpResult = tmp(1885);
  }
  if (fetched) {
    fetched = tmp6.fetched;
  }
  if (fetched) {
    fetched = tmp6.fractionalState !== constants.FP_ONLY;
  }
  if (fetched) {
    fetched = !hasDiscountApplied;
  }
  if (fetched) {
    fetched = !hasActiveTrial;
  }
  const items1 = [fetched, flag];
  const effect = noop.useEffect(() => {
    let tmp = fetched;
    if (fetched) {
      tmp = !flag;
    }
    if (tmp) {
      const result = ReferralTrialStore.checkAndFetchReferralsRemaining();
    }
  }, items1);
};
