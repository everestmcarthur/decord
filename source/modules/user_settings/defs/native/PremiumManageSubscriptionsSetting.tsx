// Module ID: 15075
// Function ID: 15076
// Name: PremiumManageSubscriptionsSetting
// Dependencies: [19, 1074, 7520, 11566, 4294, 13481, 11601, 1114, 15076, 15074, 2]

// Module 15075 (PremiumManageSubscriptionsSetting)
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4294 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7520 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11566 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11601);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: fn(15076).SubscriptionIcon,
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
