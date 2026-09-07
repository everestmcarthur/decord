// Module ID: 11087
// Function ID: 11088
// Name: useFetchCollectiblesProductCategory
// Dependencies: [32, 7542, 10740, 563, 2]
// Exports: useFetchCollectiblesProductCategory

// Module 11087 (useFetchCollectiblesProductCategory)
import setDefault from "set" /* 10740 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "updateCategoriesAndProducts" /* 7542 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const _require = skuId;
  setDefault();
  let obj = _require(563);
  let items = [closure_4];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_4.isFetchingCategories, closure_1_4.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};
