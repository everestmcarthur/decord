// Module ID: 15771
// Function ID: 15772
// Name: route
// Dependencies: [7975, 1074, 11473, 15772, 2]

// Module 15771 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Alert Modal";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_ALERT_MODAL,
  getComponent() {
    return require(15772) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
