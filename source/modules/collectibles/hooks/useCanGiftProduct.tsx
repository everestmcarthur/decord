// Module ID: 13408
// Function ID: 13409
// Name: useCanGiftProduct
// Dependencies: [8408, 7750, 7749, 4380, 1890, 4393, 2]
// Exports: useCanGiftProduct

// Module 13408 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4380 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7749 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7750 */;
import useCurrentUser from "useCurrentUser" /* 8408 */;
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
    result = tmp(7750).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7750);
  }
  if (!result) {
    result = !tmp(4393).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4393);
  }
  return !result;
};
