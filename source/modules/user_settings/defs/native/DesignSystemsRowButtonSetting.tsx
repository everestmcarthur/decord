// Module ID: 15765
// Function ID: 15766
// Name: route
// Dependencies: [7975, 1074, 11473, 15766, 2]

// Module 15765 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Row Button";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
  getComponent() {
    return require(15766) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
