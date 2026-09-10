// Module ID: 13189
// Function ID: 13190
// Name: useCanGiftProduct
// Dependencies: [8204, 7568, 7567, 4231, 1889, 4244, 2]
// Exports: useCanGiftProduct

// Module 13189 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4231 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7567 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7568 */;
import useCurrentUser from "useCurrentUser" /* 8204 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(product);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = product.type === tmp(1889).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7568).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7568);
  }
  if (!result) {
    result = !tmp(4244).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4244);
  }
  return !result;
};
