// Module ID: 8126
// Function ID: 8127
// Dependencies: [4269, 4264, 7308, 2]
// Exports: getPriceString

// Module 8126
import PremiumUtils from "PremiumUtils" /* 4264 */;
import PriceUtils from "PriceUtils" /* 7308 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4269 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.shared.tsx");

export const getPriceString = function getPriceString(hasAnyPremiumGroup, arg1) {
  if (null != hasAnyPremiumGroup) {
    if (hasAnyPremiumGroup.hasAnyPremiumGroup) {
      const planIdFromItems = hasAnyPremiumGroup.planIdFromItems;
      if (null == planIdFromItems) {
        return null;
      } else {
        value = SubscriptionPlanStore.get(planIdFromItems);
        if (null == value) {
          return null;
        } else {
          const price = PremiumUtils.getPrice(planIdFromItems);
          const tmp2 = require;
          const formatPriceResult = PriceUtils.formatPrice(price.amount, price.currency);
          if (tmp) {
            ({ interval, intervalCount } = value);
            return tmp2(7308).formatRate(formatPriceResult, interval, intervalCount);
          } else {
            return formatPriceResult;
          }
        }
      }
    }
  }
  return null;
};
