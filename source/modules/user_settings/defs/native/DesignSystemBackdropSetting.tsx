// Module ID: 15793
// Function ID: 15794
// Name: route
// Dependencies: [7975, 1074, 11473, 15794, 2]

// Module 15793 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return require(15794) /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
