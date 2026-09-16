// Module ID: 11739
// Function ID: 11740
// Name: PremiumMarketingUtil
// Dependencies: [1074, 7492, 7696, 1101, 2]
// Exports: navigateToNitroHomePage, navigateToPremiumHomePage

// Module 11739 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1101 */;
import openUserSettings from "openUserSettings" /* 7492 */;
import LayerActionCreators from "LayerActionCreators" /* 7696 */;
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
