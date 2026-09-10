// Module ID: 15068
// Function ID: 15069
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7046, 13618, 2]
// Exports: default

// Module 15068 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7046 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13618 */;
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
