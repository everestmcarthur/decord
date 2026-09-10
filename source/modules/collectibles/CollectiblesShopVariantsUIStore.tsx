// Module ID: 8899
// Function ID: 8900
// Name: CollectiblesShopVariantsUIStore
// Dependencies: [1244, 4227, 8835, 7605, 2]
// Exports: setSelectedVariantIndex, useSelectedVariantIndex

// Module 8899 (CollectiblesShopVariantsUIStore)
import _mod4227 from "module_4227" /* 4227 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7605 */;
import identity from "module_1244" /* 1244 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const state = identity.createWithEqualityFn(() => {
  const obj = { selectionStates: new Map() };
  return obj;
}, _mod4227.shallow);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopVariantsUIStore.tsx");

export const useSelectedVariantIndex = function useSelectedVariantIndex(product) {
  _require = product;
  let defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  let tmp2 = state((selectionStates) => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (obj.getIsVariantProduct(tmp)) {
        selectionStates = selectionStates.selectionStates;
        value = selectionStates.get(tmp.storeListingId);
        let selectedVariantIndex;
        if (value != null) {
          selectedVariantIndex = value.selectedVariantIndex;
        }
        tmp2 = selectedVariantIndex;
      }
      obj = CollectiblesProductUtils;
    }
    return tmp2;
  });
  if (null != tmp2) {
    const _Math = Math;
    defaultVariantIndex = Math.max(0, tmp2);
  }
  return defaultVariantIndex;
};
export const setSelectedVariantIndex = function setSelectedVariantIndex(arg0, arg1) {
  const storeListingId = arg0;
  closure_1 = arg1;
  state.setState((selectionStates) => {
    selectionStates = selectionStates.selectionStates;
    value = selectionStates.get(storeListingId.storeListingId);
    let selectedVariantIndex;
    if (value != null) {
      selectedVariantIndex = value.selectedVariantIndex;
    }
    let tmp5 = selectionStates;
    if (selectedVariantIndex !== closure_1) {
      const obj = { selectionStates: null };
      const _Map = Map;
      const map = new Map(selectionStates.selectionStates);
      const obj2 = { selectedVariantIndex: tmp4 };
      obj.selectionStates = map.set(storeListingId.storeListingId, obj2);
      tmp5 = obj;
    }
    return tmp5;
  });
};
