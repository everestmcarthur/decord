// Module ID: 13317
// Function ID: 13318
// Name: useCanGiftProduct
// Dependencies: [8326, 7668, 7667, 4297, 1890, 4310, 2]
// Exports: useCanGiftProduct

// Module 13317 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4297 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7667 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7668 */;
import useCurrentUser from "useCurrentUser" /* 8326 */;
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
    result = tmp(7668).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7668);
  }
  if (!result) {
    result = !tmp(4310).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4310);
  }
  return !result;
};
