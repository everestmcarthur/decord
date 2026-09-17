// Module ID: 10903
// Function ID: 10904
// Name: usePremiumProductPricingString
// Dependencies: [7351, 1374, 4297, 7354, 504, 2]
// Exports: default

// Module 10903 (usePremiumProductPricingString)
import IAPStore from "IAPStore" /* 7351 */;

const require = globalThis.__r;

const require = fn;
const PRICE_PLACEHOLDER = fn(1374).PRICE_PLACEHOLDER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumProductPricingString.tsx");

export default function usePremiumProductPricingString(premiumType, YEAR) {
  const planIdForPremiumType = require("PremiumUtils").getPlanIdForPremiumType(premiumType, YEAR);
  const obj = require("PremiumUtils");
  _require = require("ProductIds").getProductIdForGift(planIdForPremiumType);
  const obj2 = require("ProductIds");
  const items = [IAPStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => IAPStore.getProduct(closure_0));
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  return priceString;
};
