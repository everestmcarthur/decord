// Module ID: 15045
// Function ID: 15046
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7068, 13597, 2]
// Exports: default

// Module 15045 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7068 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13597 */;
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
