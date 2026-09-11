// Module ID: 8962
// Function ID: 8963
// Name: useGameProfileShopCollection
// Dependencies: [19, 8773, 504, 8851, 2]
// Exports: useGameProfileShopCollection, useGameProfileShopCollectionState

// Module 8962 (useGameProfileShopCollection)
import _mod19 from "module_19" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8851 */;
import GameProfileStore from "GameProfileStore" /* 8773 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
let closure_4 = [];
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = function useGameProfileShopCollectionState(arg0) {
  _require = arg0;
  const items = [GameProfileStore];
  const isFetching = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(tmp);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != tmp;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(tmp);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(tmp);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = isFetching.hasFetched;
  let skuIds = isFetching.skuIds;
  const items1 = [arg0, hasFetched];
  useEffect(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(tmp);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(tmp);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_4;
  }
  return { skuIds, hasFetched, isFetching: isFetching.isFetching };
};
export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  _require = collectionId;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let result = null != closure_0;
    if (result) {
      result = GameProfileStore.hasShopCollectionBeenFetched(tmp);
    }
    const obj = { hasFetched: result, isFetching: null, skuIds: null };
    let result1 = null != tmp;
    if (result1) {
      result1 = GameProfileStore.isShopCollectionFetching(tmp);
    }
    obj.isFetching = result1;
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(tmp);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  ({ isFetching, skuIds } = stateFromStoresObject);
  const items1 = [collectionId, hasFetched];
  useEffect(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isShopCollectionFetching(tmp);
    }
    if (!result) {
      const shopCollection = GameProfileHttpUtils.getShopCollection(tmp);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_4;
  }
  return skuIds;
};
