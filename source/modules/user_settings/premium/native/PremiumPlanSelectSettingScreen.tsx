// Module ID: 15114
// Function ID: 15115
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7108, 13654, 2]
// Exports: default

// Module 15114 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7108 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13654 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const obj2 = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(PremiumPlanSelectDefault, {});
};
