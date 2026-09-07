// Module ID: 14993
// Function ID: 14994
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 6994, 13546, 2]
// Exports: default

// Module 14993 (PremiumPlanSelectSettingScreen)
import noopAll from "noop" /* 19 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6994 */;
import BoostPurchaseNitroBannerDefault from "BoostPurchaseNitroBanner" /* 13546 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(BoostPurchaseNitroBannerDefault, {});
};
