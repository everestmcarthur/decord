// Module ID: 15752
// Function ID: 15753
// Name: route
// Dependencies: [1074, 11473, 13382, 15753, 15617, 2]

// Module 15752 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13382 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15753 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return require(15617) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
