// Module ID: 8136
// Function ID: 8137
// Name: usePremiumDiscountOffer
// Dependencies: [7311, 1373, 8137, 7314, 563, 2]
// Exports: usePremiumDiscountOffer, usePremiumGroupDiscountOffer

// Module 8136 (usePremiumDiscountOffer)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ProductIds from "ProductIds" /* 7314 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 8137 */;
import IAPStore from "IAPStore" /* 7311 */;

require = fn;
const PremiumConstants = fn(1373);
({ PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_4, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: hasOwnProperty } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/usePremiumDiscountOffer.android.tsx");

export const usePremiumDiscountOffer = function usePremiumDiscountOffer() {
  const items = [IAPStore];
  const offerIds = useStateFromStores.useStateFromStoresObject(items, () => ({ isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() })).offerIds;
  const values = Object.values(ProductIds.DiscountIdToProductOfferId[React4]);
  let tmp5 = null;
  if (0 !== values.length) {
    let tmp6 = null;
    if (values.every((item) => offerIds.has(item))) {
      tmp6 = tmp4;
    }
    tmp5 = tmp6;
  }
  tmp4 = useDiscountOfferDefault(React4);
  const values2 = Object.values(ProductIds.DiscountIdToProductOfferId[hasOwnProperty]);
  let tmp8 = null;
  if (0 !== values2.length) {
    let tmp9 = null;
    if (values2.every((item) => offerIds.has(item))) {
      tmp9 = tmp7;
    }
    tmp8 = tmp9;
  }
  if (tmp5 == null) {
    tmp5 = tmp8;
  }
  return tmp5;
};
export function usePremiumGroupDiscountOffer() {
  return null;
}
