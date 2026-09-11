// Module ID: 13259
// Function ID: 13260
// Name: useCanGiftProduct
// Dependencies: [8263, 7627, 7626, 4264, 1889, 4277, 2]
// Exports: useCanGiftProduct

// Module 13259 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4264 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7626 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7627 */;
import useCurrentUser from "useCurrentUser" /* 8263 */;
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
    result = tmp(7627).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7627);
  }
  if (!result) {
    result = !tmp(4277).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4277);
  }
  return !result;
};
