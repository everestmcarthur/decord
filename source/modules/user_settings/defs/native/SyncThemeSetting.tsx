// Module ID: 15371
// Function ID: 15372
// Name: SyncThemeSetting
// Dependencies: [4426, 1184, 1183, 1221, 8050, 1074, 504, 1114, 15372, 9451, 11564, 2]

// Module 15371 (SyncThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9451 */;
import actions_AnalyticsTrackingActionCreators from "actions/AnalyticsTrackingActionCreators" /* 15372 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4426 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1184 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SettingBuilders = fn(11564);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3340dY"]);
  },
  parent: fn(8050).MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
    let id;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    if (id == null) {
      id = null;
    }
    const appearance = UserSettingsProtoStore.settings.appearance;
    let prop;
    if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    actions_AnalyticsTrackingActionCreators.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, { is_sync_enabled, base_theme: ThemeStore.theme, client_theme: id, has_custom_theme: null != prop });
    const obj2 = { is_sync_enabled, base_theme: ThemeStore.theme, client_theme: id, has_custom_theme: null != prop };
    const tmp3 = null != prop;
    const result = UserSettingsActionCreatorsDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = util.intl;
    return intl.string(util.t.CRtkeH).trim();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default toggle;
