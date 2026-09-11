// Module ID: 11104
// Function ID: 11105
// Name: useCollectiblesExternalGatewayFacet
// Dependencies: [19, 1371, 504, 8938, 2]
// Exports: default

// Module 11104 (useCollectiblesExternalGatewayFacet)
import _mod19 from "module_19" /* 19 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8938 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx");

export default function useCollectiblesExternalGatewayFacet(arg0) {
  _require = arg0;
  let items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(closure_0, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      const obj2 = { line_items: null };
      const obj3 = { external_product_id: collectibleGoogleSkuId };
      const items = [obj3];
      obj2.line_items = items;
      return obj2;
    }
  }, items1);
};
