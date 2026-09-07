// Module ID: 15799
// Function ID: 15800
// Name: route
// Dependencies: [7975, 1074, 11473, 15800, 2]

// Module 15799 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Sheets";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return require(15800) /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
