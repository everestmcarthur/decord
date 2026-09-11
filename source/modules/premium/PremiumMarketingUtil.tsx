// Module ID: 11692
// Function ID: 11693
// Name: PremiumMarketingUtil
// Dependencies: [1074, 7456, 7660, 1100, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11692 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1100 */;
import openUserSettings from "openUserSettings" /* 7456 */;
import LayerActionCreators from "LayerActionCreators" /* 7660 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  LayerActionCreators.popLayer();
  router_utils.transitionTo(constants.APPLICATION_STORE);
};
