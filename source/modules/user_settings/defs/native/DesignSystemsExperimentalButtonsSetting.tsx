// Module ID: 15767
// Function ID: 15768
// Name: route
// Dependencies: [7975, 1074, 11473, 15768, 2]

// Module 15767 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return require(15768) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
