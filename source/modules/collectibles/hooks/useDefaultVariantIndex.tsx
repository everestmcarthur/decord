// Module ID: 8858
// Function ID: 8859
// Name: useDefaultVariantIndex
// Dependencies: [7631, 504, 7627, 2]
// Exports: useDefaultVariantIndex

// Module 8858 (useDefaultVariantIndex)
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7631 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [CollectiblesPurchaseStore];
  _require = require("initialize").useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
    tmpResult = require("CollectiblesProductUtils");
  }
  return num;
};
