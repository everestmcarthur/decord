// Module ID: 15525
// Function ID: 15526
// Name: AppearanceSetting
// Dependencies: [4575, 1185, 1074, 4690, 504, 1228, 8116, 1115, 2712, 11723, 15526, 15528, 2]
// Exports: useAppearanceSettingTrailing

// Module 15525 (AppearanceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import useThemeDefault from "useTheme" /* 4690 */;
import useActiveTheme from "useActiveTheme" /* 8116 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4575 */;

const _modDef2712 = tmp(2712);
require = fn;
function useAppearanceSettingTrailing() {
  const tmp3 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = ClientThemesUtils.getThemeName(tmp3);
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1115).intl;
    return intl2.string(_modDef2712.KSBBpC);
  } else if (tmp8.CLIENT === activeThemeType) {
    let name;
    if (stateFromStores != null) {
      const getName = stateFromStores.getName;
      if (getName != null) {
        name = getName();
      }
    }
    if (name == null) {
      name = themeName;
    }
    return name;
  } else if (tmp8.SYSTEM === activeThemeType) {
    const intl = tmp4(1115).intl;
    return intl.string(tmp4(1115).t.wFpwSk);
  } else {
    return tmp8.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
const ActiveThemeType = fn(1185).ActiveThemeType;
const SettingBuilders = fn(11723);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(15526).PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export { useAppearanceSettingTrailing };
