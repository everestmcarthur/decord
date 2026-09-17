// Module ID: 8360
// Function ID: 8361
// Name: useProfileFrame
// Dependencies: [7656, 7671, 7663, 504, 2]
// Exports: default

// Module 8360 (useProfileFrame)
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7656 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7671 */;

const require = globalThis.__r;

const require = fn;
const isProfileFrameRecord = fn(7663).isProfileFrameRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useProfileFrame.tsx");

export default function useProfileFrame(arg0) {
  _require = arg0;
  const items = [CollectiblesCategoryStore, CollectiblesPurchaseStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const product = CollectiblesCategoryStore.getProduct(tmp);
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (isProfileFrameRecord(first)) {
        return product.items[0];
      } else {
        const purchase = CollectiblesPurchaseStore.getPurchase(tmp);
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        let first2;
        if (tmp4(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
    }
  });
};
