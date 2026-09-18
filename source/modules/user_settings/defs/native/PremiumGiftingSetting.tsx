// Module ID: 15210
// Function ID: 15211
// Name: PremiumGiftingSetting
// Dependencies: [19, 1074, 21, 7613, 11685, 13758, 1177, 11714, 1115, 11284, 4393, 13757, 2]

// Module 15210 (PremiumGiftingSetting)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4393 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7613 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11685 */;
import PromotionsHooks from "PromotionsHooks" /* 13758 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11714);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: fn(11284).GiftIcon,
  usePredicate() {
    return BillingPlatformUtils.isPremiumGiftingSupported();
  },
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
  useTrailing: function usePremiumGiftingSettingTrailing() {
    const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
    return jsx(native.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: {
    route: fn(1074).UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;
