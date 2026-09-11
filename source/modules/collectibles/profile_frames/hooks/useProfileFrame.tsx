// Module ID: 8299
// Function ID: 8300
// Name: useProfileFrame
// Dependencies: [7616, 7631, 7623, 504, 2]
// Exports: default

// Module 8299 (useProfileFrame)
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7616 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7631 */;

const require = globalThis.__r;

const require = fn;
const isProfileFrameRecord = fn(7623).isProfileFrameRecord;
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
