// Module ID: 13309
// Function ID: 13310
// Name: useCanGiftProduct
// Dependencies: [8307, 7664, 7663, 4295, 1890, 4308, 2]
// Exports: useCanGiftProduct

// Module 13309 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4295 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7663 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7664 */;
import useCurrentUser from "useCurrentUser" /* 8307 */;
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
    result = product.type === tmp(1890).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7664).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7664);
  }
  if (!result) {
    result = !tmp(4308).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4308);
  }
  return !result;
};
