// Module ID: 15308
// Function ID: 15309
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: [19, 1186, 21, 15269, 1114, 2]
// Exports: default

// Module 15308 (SettingsAppearanceLightModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import ThemeTypesDefault from "ThemeTypes" /* 15269 */;
import { SystemTheme } from "SystemThemeState" /* 1186 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.NoFvjZ);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};
