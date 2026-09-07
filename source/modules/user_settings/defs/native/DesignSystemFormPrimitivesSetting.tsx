// Module ID: 15801
// Function ID: 15802
// Name: route
// Dependencies: [7975, 1074, 11473, 15802, 2]

// Module 15801 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Form Primitives";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_FORM_PRIMITIVES,
  getComponent() {
    return require(15802) /* Radio */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemFormPrimitivesSetting.tsx");

export default route;
