// Module ID: 15871
// Function ID: 15872
// Name: DesignSystemsSetting
// Dependencies: [1074, 11614, 15372, 15872, 15732, 2]

// Module 15871 (DesignSystemsSetting)
import Constants from "Constants" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15372 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15872 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM,
    getComponent() {
      return require("UserSettingsDesignSystemsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
