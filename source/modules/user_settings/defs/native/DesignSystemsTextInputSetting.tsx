// Module ID: 15785
// Function ID: 15786
// Name: route
// Dependencies: [7975, 1074, 11473, 15786, 2]

// Module 15785 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Text Input";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
  getComponent() {
    return require(15786) /* Sample */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
