// Module ID: 11019
// Function ID: 11020
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1371, 504, 8853, 10820, 2]
// Exports: default

// Module 11019 (useMobileCollectiblesPurchaseSKU)
import initialize from "initialize" /* 504 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 8853 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10820 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.create(null));
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = hasAtLeastOneGPlaySynced.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = hasAtLeastOneGPlaySynced;
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj);
};
