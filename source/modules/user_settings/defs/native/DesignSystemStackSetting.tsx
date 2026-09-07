// Module ID: 15791
// Function ID: 15792
// Name: route
// Dependencies: [7975, 1074, 11473, 15792, 2]

// Module 15791 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Stack";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_STACK,
  getComponent() {
    return require(15792) /* StackBlock */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;
