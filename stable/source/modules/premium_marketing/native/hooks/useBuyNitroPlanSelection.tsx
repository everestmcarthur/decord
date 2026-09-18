// Module ID: 13362
// Function ID: 13363
// Name: useBuyNitroPlanSelection
// Dependencies: [32, 19, 1373, 7409, 7447, 7446, 13361, 8061, 10712, 9385, 9370, 2]
// Exports: useBuyNitroPlanSelection

// Module 13362 (useBuyNitroPlanSelection)
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7409 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const PremiumConstants = fn(1373);
const PremiumTypes = PremiumConstants.PremiumTypes;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = PremiumTypes);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx");

export const NITRO_PLAN_TIERS = items;
export const useBuyNitroPlanSelection = function useBuyNitroPlanSelection(tier) {
  const premiumTrialOffer = memo2(memo[4]).usePremiumTrialOffer();
  const obj = memo2(memo[4]);
  const premiumTrialOfferPremiumType = memo2(memo[5]).usePremiumTrialOfferPremiumType();
  const obj2 = memo2(memo[5]);
  const buyNitroTrialUnavailableTiers = memo2(memo[6]).useBuyNitroTrialUnavailableTiers();
  let tmp5;
  if (null != premiumTrialOfferPremiumType) {
    if (buyNitroOrderPriceOverrides.includes(premiumTrialOfferPremiumType)) {
      tmp5 = premiumTrialOfferPremiumType;
    }
  }
  let tmp7;
  if (null != tmp5) {
    if (!buyNitroTrialUnavailableTiers.has(tmp5)) {
      tmp7 = tmp5;
    }
  }
  if (null != tmp7) {
    let trialId;
    if (premiumTrialOffer != null) {
      trialId = premiumTrialOffer.trialId;
    }
    const tmp8 = trialId;
  }
  tier = undefined;
  if (tier != null) {
    tier = tier.tier;
  }
  if (tier == null) {
    tier = null;
  }
  const obj3 = memo2(memo[6]);
  const tmp11 = found;
  [TIER_2, memo2] = found(found1.useState(tier), 2);
  if (TIER_2 == null) {
    TIER_2 = tmp5;
  }
  if (TIER_2 == null) {
    TIER_2 = priceString.TIER_2;
  }
  importDefault = TIER_2;
  items = [TIER_2];
  memo = obj5.useMemo(() => {
    closure_0 = closure_1;
    const premiumBundlesWithPredicate = PremiumBundledPlansUtils.getPremiumBundlesWithPredicate((additionalPlans) => {
      let tmp = 0 === additionalPlans.additionalPlans.length;
      if (tmp) {
        tmp = true !== additionalPlans.isDeprecated;
      }
      if (tmp) {
        tmp = 0 === additionalPlans.numPremiumGuild;
      }
      if (tmp) {
        tmp = additionalPlans.premiumTier === closure_0;
      }
      return tmp;
    });
    return premiumBundlesWithPredicate.sort((interval, interval2) => interval2.interval - interval.interval);
  }, items);
  const tmp12 = found(found1.useState(tier), 2);
  const premiumDiscountOffer = memo2(memo[7]).usePremiumDiscountOffer();
  const tmpResult = memo2(memo[7]);
  const isEligibleForBogoOffer = memo2(memo[8]).useIsEligibleForBogoOffer();
  const tmpResult4 = memo2(memo[8]);
  const discountedPremiumProductInfo = memo2(memo[9]).useDiscountedPremiumProductInfo(premiumDiscountOffer, memo);
  ({ discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  let num = NaN;
  if (null != premiumDiscountOffer) {
    const _parseFloat = parseFloat;
    num = parseFloat(premiumDiscountOffer.discount.amount);
  }
  let identifier;
  if (discountedProduct != null) {
    identifier = discountedProduct.identifier;
  }
  const obj4 = { id: identifier, priceString: discountedPriceString, numMonths: null, percentOff: null };
  let num2;
  if (premiumDiscountOffer != null) {
    const discount = premiumDiscountOffer.discount;
    if (discount != null) {
      num2 = discount.intervalCount;
    }
  }
  if (num2 == null) {
    num2 = 1;
  }
  obj4.numMonths = num2;
  let tmp19 = null;
  if (!Number.isNaN(num)) {
    tmp19 = num;
  }
  obj4.percentOff = tmp19;
  found = memo.find((interval) => interval.interval === priceString1.MONTH);
  found1 = memo.find((interval) => interval.interval === priceString1.YEAR);
  let basePlanId;
  const tmp22 = importDefault;
  const tmpResult5 = memo2(memo[9]);
  if (found != null) {
    basePlanId = found.basePlanId;
  }
  const tmp23Result = require("usePremiumPlanPrice")(basePlanId);
  priceString = undefined;
  if (tmp23Result != null) {
    priceString = tmp23Result.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  let basePlanId1;
  const tmp23 = require("usePremiumPlanPrice");
  if (found1 != null) {
    basePlanId1 = found1.basePlanId;
  }
  const tmp22ResultResult = tmp22(memo[10])(basePlanId1);
  let priceString1;
  if (tmp22ResultResult != null) {
    priceString1 = tmp22ResultResult.priceString;
  }
  if (priceString1 == null) {
    priceString1 = null;
  }
  const tmp22Result = tmp22(memo[10]);
  buyNitroOrderPriceOverrides = memo2(memo[6]).useBuyNitroOrderPriceOverrides();
  const items1 = [found, found1, priceString, priceString1, buyNitroOrderPriceOverrides];
  const memo1 = obj5.useMemo(() => {
    const map = new Map();
    let tmp2 = null != found;
    if (tmp2) {
      tmp2 = null != priceString;
    }
    if (tmp2) {
      const result = map.set(found.productId, priceString);
    }
    let tmp7 = null != found1;
    if (tmp7) {
      tmp7 = null != priceString1;
    }
    if (tmp7) {
      const result1 = map.set(found1.productId, priceString1);
    }
    while (tmp12 !== undefined) {
      let tmp15 = _slicedToArray(tmp13, 2);
      [tmp16, tmp18] = tmp15;
      let tmp17 = tmp16;
      if (map.has(tmp16)) {
        let result2 = map.set(tmp17, tmp18);
      }
      continue;
    }
    return map;
  }, items1);
  const items2 = [memo, memo1];
  memo2 = obj5.useMemo(() => {
    const set = new Set();
    if (memo1.size > 0) {
      for (const item10015 of memo) {
        let tmp3 = item10015;
        if (!memo1.has(item10015.productId)) {
          let addResult = set.add(tmp3.productId);
        }
        continue;
      }
    }
    return set;
  }, items2);
  let productId;
  if (tier != null) {
    productId = tier.productId;
  }
  if (productId == null) {
    productId = null;
  }
  const tmp11Result = tmp11(found1.useState(productId), 2);
  let first = tmp11Result[0];
  closure_10 = tmp11Result[1];
  const items3 = [TIER_2];
  [][0] = TIER_2;
  const callback = obj5.useCallback((arg0) => {
    if (arg0 !== closure_1) {
      memo2(arg0);
      closure_10(null);
    }
  }, items3);
  if (null != first) {
    const found2 = memo.find((productId) => productId.productId === first);
    let tmp43 = null != tmp7;
    if (tmp43) {
      let premiumTier;
      if (found2 != null) {
        premiumTier = found2.premiumTier;
      }
      tmp43 = premiumTier === tmp7;
    }
    const obj6 = { tier: TIER_2, setTier: callback, productId: first, setProductId: tmp38, item: found2, priceString: null, isDiscounted: null, isTrial: null };
    let tmp45 = null;
    if (null != found2) {
      if (!tmp42) {
        value = memo1.get(found2.productId);
        if (value == null) {
          value = null;
        }
        discountedPriceString = value;
      }
      tmp45 = discountedPriceString;
    }
    const obj7 = { selection: null, items: null, priceStringByProductId: null, unavailableProductIds: null, bogoEligible: null, hasDiscountOffer: null, trialTier: null, trialId: null, discounted: null };
    obj6.priceString = tmp45;
    obj6.isDiscounted = null != found2 && found2.productId === obj4.id && null != discountedPriceString;
    obj6.isTrial = tmp43;
    obj7.selection = obj6;
    obj7.items = memo;
    obj7.priceStringByProductId = memo1;
    obj7.unavailableProductIds = memo2;
    obj7.bogoEligible = isEligibleForBogoOffer;
    obj7.hasDiscountOffer = null != premiumDiscountOffer;
    obj7.trialTier = tmp7;
    obj7.trialId = tmp8;
    obj7.discounted = obj4;
    return obj7;
  }
  importDefault = isEligibleForBogoOffer ? priceString1.MONTH : priceString1.YEAR;
  const found3 = memo.filter((productId) => !memo2.has(productId.productId));
  let arr7 = memo;
  if (found3.length > 0) {
    arr7 = found3;
  }
  let found4 = arr7.find((interval) => interval.interval === closure_1);
  if (found4 == null) {
    found4 = arr7[0];
  }
  let productId1;
  if (found4 != null) {
    productId1 = found4.productId;
  }
  first = productId1;
};
