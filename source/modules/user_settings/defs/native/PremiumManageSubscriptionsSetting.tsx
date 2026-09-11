// Module ID: 15041
// Function ID: 15042
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1074, 7490, 11527, 4264, 13448, 11562, 1114, 15042, 15040, 2]

// Module 15041 (PremiumManageSubscriptionsSetting)
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4264 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7490 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11527 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11562);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: fn(15042).SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return noop.useCallback(() => {
      const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        openBlockedPaymentsCountryActionSheetDefault();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  },
  screen: {
    route: fn(1074).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
