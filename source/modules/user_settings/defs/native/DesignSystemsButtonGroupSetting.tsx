// Module ID: 15763
// Function ID: 15764
// Name: route
// Dependencies: [7975, 1074, 11473, 15764, 2]

// Module 15763 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Button Group";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
  getComponent() {
    return require(15764) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
