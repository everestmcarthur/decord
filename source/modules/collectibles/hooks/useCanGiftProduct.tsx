// Module ID: 13236
// Function ID: 13237
// Name: useCanGiftProduct
// Dependencies: [8241, 7606, 7605, 4262, 1889, 4275, 2]
// Exports: useCanGiftProduct

// Module 13236 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4262 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7605 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7606 */;
import useCurrentUser from "useCurrentUser" /* 8241 */;
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
    result = tmp(7606).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7606);
  }
  if (!result) {
    result = !tmp(4275).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4275);
  }
  return !result;
};
