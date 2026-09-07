// Module ID: 15311
// Function ID: 15312
// Name: toggle
// Dependencies: [4379, 1184, 1183, 1221, 7975, 1074, 504, 1114, 15312, 9363, 11473, 2]

// Module 15311 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9363 */;
import track from "track" /* 15312 */;
import closure_3 from "reset" /* 4379 */;
import closure_4 from "initialize" /* 1184 */;
import closure_5 from "handleThemeChange" /* 1183 */;
import closure_6 from "handleConnectionClosedOrResumed" /* 1221 */;
import { AnalyticEvents } from "ME" /* 1074 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3340dY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    const items = [closure_5];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [closure_4];
    return initialize.useStateFromStores(items, () => false !== closure_4.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    gradientPreset = gradientPreset.gradientPreset;
    let id;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    if (id == null) {
      id = null;
    }
    const appearance = settings.settings.appearance;
    let prop;
    if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    let obj = track;
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = saveGuildFoldersDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;
