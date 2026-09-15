// Module ID: 15090
// Function ID: 15091
// Name: PremiumPlanSelectSettingScreen
// Dependencies: [19, 21, 7101, 13634, 2]
// Exports: default

// Module 15090 (PremiumPlanSelectSettingScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7101 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13634 */;
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
