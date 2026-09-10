// Module ID: 13433
// Function ID: 13434
// Name: useBuyNitroTrialAndPriceOverrides
// Dependencies: [560, 2]
// Exports: applyBuyNitroOrderPriceOverride, markBuyNitroTrialUnavailable, resetBuyNitroTrialAndPriceOverrides, useBuyNitroOrderPriceOverrides, useBuyNitroTrialUnavailableTiers

// Module 13433 (useBuyNitroTrialAndPriceOverrides)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const obj = { trialUnavailableTiers: new Set(), orderPriceOverrides: null };
let set = new Set();
obj.orderPriceOverrides = new Map();
let closure_1 = module_560.create(() => obj);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroTrialAndPriceOverrides.tsx");

export const useBuyNitroTrialUnavailableTiers = function useBuyNitroTrialUnavailableTiers() {
  return closure_1((trialUnavailableTiers) => trialUnavailableTiers.trialUnavailableTiers);
};
export const useBuyNitroOrderPriceOverrides = function useBuyNitroOrderPriceOverrides() {
  return closure_1((orderPriceOverrides) => orderPriceOverrides.orderPriceOverrides);
};
export const markBuyNitroTrialUnavailable = function markBuyNitroTrialUnavailable(premiumTier) {
  const trialUnavailableTiers = closure_1.getState().trialUnavailableTiers;
  if (!trialUnavailableTiers.has(premiumTier)) {
    const obj2 = { trialUnavailableTiers: null };
    const _Set = Set;
    const set = new Set(trialUnavailableTiers);
    obj2.trialUnavailableTiers = set.add(premiumTier);
    closure_1.setState(obj2);
  }
};
export const applyBuyNitroOrderPriceOverride = function applyBuyNitroOrderPriceOverride(productId, arg1) {
  const orderPriceOverrides = closure_1.getState().orderPriceOverrides;
  if (orderPriceOverrides.get(productId) !== arg1) {
    const obj2 = { orderPriceOverrides: null };
    const _Map = Map;
    const map = new Map(orderPriceOverrides);
    obj2.orderPriceOverrides = map.set(productId, arg1);
    closure_1.setState(obj2);
  }
};
export const resetBuyNitroTrialAndPriceOverrides = function resetBuyNitroTrialAndPriceOverrides() {
  closure_1.setState(obj);
};
