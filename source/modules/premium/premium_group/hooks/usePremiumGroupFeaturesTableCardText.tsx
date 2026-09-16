// Module ID: 13590
// Function ID: 13591
// Name: usePremiumGroupFeaturesTableCardText
// Dependencies: [4301, 4309, 1115, 3075, 1380, 8166, 13591, 504, 2]
// Exports: default

// Module 13590 (usePremiumGroupFeaturesTableCardText)
import initialize from "initialize" /* 504 */;
import user from "user" /* 1380 */;
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName" /* 13591 */;
import SubscriptionStore from "SubscriptionStore" /* 4301 */;

require = fn;
const PremiumGroupConstants = fn(4309);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  const tmp4 = usePremiumGroupPrimaryNameDefault({ useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER });
  const obj = { useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER };
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === tmp(1380).PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = tmp(8166).getPriceString(stateFromStores, { withIntervals: true });
      const tmpResult = tmp(8166);
    } else {
      priceString = null;
      if (null != tmp4) {
        const intl = tmp(1115).intl;
        const obj3 = { primaryName: tmp4, premiumGroupProductName: React4() };
        priceString = intl.format(tmp3(3075).Nu9LNm, obj3);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === tmp(1380).PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = tmp(1115).intl;
      const obj4 = { helpCenterLink, premiumGroupProductName: React4() };
      let formatResult = intl3.format(tmp3(3075)["+R/K74"], obj4);
    } else {
      const intl2 = tmp(1115).intl;
      const tmp3Result = tmp3(3075);
      const obj5 = { helpCenterLink };
      formatResult = intl2.format(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj5);
    }
    const obj6 = { subheaderString: str, bodyString: formatResult };
    return obj6;
  }
};
