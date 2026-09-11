// Module ID: 10842
// Function ID: 10843
// Name: usePremiumProductPricingString
// Dependencies: [7311, 1373, 4264, 7314, 504, 2]
// Exports: default

// Module 10842 (usePremiumProductPricingString)
import IAPStore from "IAPStore" /* 7311 */;

const require = globalThis.__r;

const require = fn;
const PRICE_PLACEHOLDER = fn(1373).PRICE_PLACEHOLDER;
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
