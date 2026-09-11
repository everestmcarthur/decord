// Module ID: 15066
// Function ID: 15067
// Name: useBountySwipeUpNux
// Dependencies: [32, 11615, 15067, 1943, 7461, 2]
// Exports: useBountySwipeUpNux

// Module 15066 (useBountySwipeUpNux)
import BountiesVerticalScrollExperiment2 from "BountiesVerticalScrollExperiment" /* 11615 */;
import bountiesSwipeUpNuxDevTools from "bountiesSwipeUpNuxDevTools" /* 15067 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountySwipeUpNux.tsx");

export const useBountySwipeUpNux = function useBountySwipeUpNux(location) {
  let isEligible = location.isEligible;
  const BountiesVerticalScrollExperiment = BountiesVerticalScrollExperiment2.BountiesVerticalScrollExperiment;
  const tmp3 = "none" === BountiesVerticalScrollExperiment.useConfig({ location: location.location }).scrollAffordanceVariant;
  const first = _slicedToArray(bountiesSwipeUpNuxDevTools.useForceBountiesSwipeUpNux(), 1)[0];
  if (isEligible) {
    if (tmp3) {
      const items = [tmp(1943).DismissibleContent.BOUNTIES_SWIPE_UP_NUX];
    }
    let prop = null;
    if (isEligible) {
      prop = null;
      if (!tmp3) {
        prop = tmp(1943).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
      }
    }
    const tmpResult = tmp(7461);
    if (first) {
      let tmp11 = isEligible;
      if (isEligible) {
        tmp11 = tmp3;
      }
      let tmp10 = tmp11;
    } else {
      tmp10 = tmp9 === tmp(1943).DismissibleContent.BOUNTIES_SWIPE_UP_NUX;
    }
    const tmp4Result = tmp4(tmp(7461).useSelectedDismissibleContent([]), 2);
    const tmpResult2 = tmp(7461);
    const obj2 = { hasSingleUseSwipeUpNux: tmp10, dismissSingleUseSwipeUpNux: tmp4Result[1], hasRecurringSwipeUpNux: null, dismissRecurringSwipeUpNux: null };
    if (first) {
      if (isEligible) {
        isEligible = !tmp3;
      }
      let tmp14 = isEligible;
    } else {
      tmp14 = tmp13 === tmp(1943).DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX;
    }
    obj2.hasRecurringSwipeUpNux = tmp14;
    obj2.dismissRecurringSwipeUpNux = tmp4(tmp(7461).useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 86400000 }), 2)[1];
    return obj2;
  }
};
