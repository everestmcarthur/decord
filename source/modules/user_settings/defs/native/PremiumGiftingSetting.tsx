// Module ID: 15081
// Function ID: 15082
// Name: PremiumGiftingSetting
// Dependencies: [19, 1074, 21, 7520, 11566, 13549, 1178, 11601, 1114, 11164, 4307, 13640, 2]

// Module 15081 (PremiumGiftingSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4307 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7520 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11566 */;
import PromotionsHooks from "PromotionsHooks" /* 13549 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11601);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: fn(11164).GiftIcon,
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
