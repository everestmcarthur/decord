// Module ID: 15106
// Function ID: 15107
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7104, 13646, 2]
// Exports: default

// Module 15106 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7104 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13646 */;
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
