// Module ID: 8174
// Function ID: 8175
// Name: useMaybeFetchReferralsRemaining
// Dependencies: [19, 1372, 7562, 1374, 504, 8175, 8176, 7503, 1886, 2]
// Exports: useMaybeFetchReferralsRemaining

// Module 8174 (useMaybeFetchReferralsRemaining)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7562 */;

const require = fn;
const PremiumConstants = fn(1374);
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
  const hasDiscountApplied = flag(8175).useHasDiscountApplied();
  const obj2 = flag(8175);
  const hasActiveTrial = flag(8176).useHasActiveTrial();
  const tmp6 = fetched(7503)();
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  fetched = true === verified;
  if (fetched) {
    fetched = tmp(1886).isPremiumExactly(stateFromStores, TIER_2.TIER_2);
    const tmpResult = tmp(1886);
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
