// Module ID: 15256
// Function ID: 15257
// Name: UserSettingsAppearanceThemeUtils
// Dependencies: [1228, 1183, 1186, 1074, 1230, 1373, 1231, 1187, 15257, 12018, 9428, 1229, 4453, 15258, 1242, 2]
// Exports: disableSameAsDeviceTheme, enableSameAsDeviceTheme, getSyncedModeThemeIndex, getUserThemeIndex, handleSaveSyncedModeTheme, handleSaveTheme, trackClientThemeUpdated

// Module 15256 (UserSettingsAppearanceThemeUtils)
import ClientThemesTypes from "ClientThemesTypes" /* 1231 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4453 */;
import SameAsDeviceThemeUtils from "SameAsDeviceThemeUtils" /* 15258 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1228 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const SystemThemeState = fn(1186).SystemThemeState;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_7 = fn(1230).BACKGROUND_GRADIENT_PRESETS_MOBILE;
const constants = fn(1373).AnalyticsPremiumFeatureNames;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/UserSettingsAppearanceThemeUtils.tsx");

export const handleSaveTheme = function handleSaveTheme(mobileThemes, analyticsLocations, isSynced) {
  if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: isSynced, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
    if ("system" === mobileThemes.theme) {
      const result = tmp(15257).resetBackgroundGradientPreset();
      const tmpResult = tmp(15257);
      tmp(12018).resetCustomTheme();
      const tmpResult13 = tmp(12018);
      const obj3 = { theme: mobileThemes.theme };
      return tmp(9428).saveClientTheme(obj3);
    } else if (mobileThemes.type === tmp(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const customThemeBaseTheme = tmp(1229).getCustomThemeBaseTheme(mobileThemes.theme);
      const tmpResult15 = tmp(1229);
      const result1 = tmp(15257).resetBackgroundGradientPreset();
      const tmpResult16 = tmp(15257);
      tmp(12018).updateCustomTheme(mobileThemes.customThemeSettings, customThemeBaseTheme);
      const tmpResult17 = tmp(12018);
      const obj4 = { customUserThemeSettings: mobileThemes.customThemeSettings, theme: customThemeBaseTheme };
      return tmp(9428).saveClientTheme(obj4);
    } else {
      if (mobileThemes.type === tmp(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const result2 = tmp(15257).updateBackgroundGradientPreset(mobileThemes.id);
        const tmpResult19 = tmp(15257);
        tmp(12018).resetCustomTheme();
        const tmpResult20 = tmp(12018);
        ({ id: obj10.backgroundGradientPresetId, theme: obj10.theme } = mobileThemes);
        let saveClientThemeResult = tmp(9428).saveClientTheme({ backgroundGradientPresetId: null, theme: null });
        const obj5 = { backgroundGradientPresetId: null, theme: null };
        const tmpResult21 = tmp(9428);
      } else {
        const result3 = tmp(15257).resetBackgroundGradientPreset();
        const tmpResult22 = tmp(15257);
        tmp(12018).resetCustomTheme();
        const tmpResult23 = tmp(12018);
        const obj6 = { theme: mobileThemes.theme };
        saveClientThemeResult = tmp(9428).saveClientTheme(obj6);
        const tmpResult24 = tmp(9428);
      }
      return saveClientThemeResult;
    }
  } else if (mobileThemes.type === tmp(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
    let combined = tmp(1187).BackgroundGradientPresetId[mobileThemes.id];
  } else {
    const _HermesInternal = HermesInternal;
    combined = "default " + mobileThemes.theme;
  }
};
export const handleSaveSyncedModeTheme = function handleSaveSyncedModeTheme(mobileThemes, systemTheme, analyticsLocations) {
  if ("system" !== mobileThemes.theme) {
    if (mobileThemes.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
      const obj2 = { feature_name: constants.CLIENT_THEME, theme_name: "custom theme", is_persisted: true, is_synced: false, location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, obj2);
      if (mobileThemes.type === tmp14(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        let theme = tmp14(1229).getCustomThemeBaseTheme(mobileThemes.theme);
        const tmp14Result = tmp14(1229);
      } else {
        theme = mobileThemes.theme;
      }
      const obj3 = {};
      obj3[systemTheme] = theme;
      const result = tmp14(4453).updateThemePreferences(obj3);
      if (mobileThemes.type === tmp14(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
        const obj4 = { customUserThemeSettings: mobileThemes.customThemeSettings };
        const result1 = tmp14(4453).updateSyncedClientTheme(systemTheme, obj4);
        const tmp14Result6 = tmp14(4453);
      } else if (mobileThemes.type === tmp14(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
        const obj5 = { backgroundGradientPresetId: mobileThemes.id };
        const result2 = tmp14(4453).updateSyncedClientTheme(systemTheme, obj5);
        const tmp14Result7 = tmp14(4453);
      } else {
        const obj6 = { theme: mobileThemes.theme };
        const result3 = tmp14(4453).updateSyncedClientTheme(systemTheme, obj6);
        const tmp14Result8 = tmp14(4453);
      }
      const tmp14Result5 = tmp14(4453);
    } else if (mobileThemes.type === tmp14(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET) {
      let combined = tmp14(1187).BackgroundGradientPresetId[mobileThemes.id];
    } else {
      const _HermesInternal = HermesInternal;
      combined = "default " + mobileThemes.theme;
    }
  }
};
export const getSyncedModeThemeIndex = function getSyncedModeThemeIndex(memo2, systemTheme) {
  const syncedClientTheme = ThemeStore.getSyncedClientTheme(systemTheme);
  let prop;
  if (syncedClientTheme != null) {
    prop = syncedClientTheme.customUserThemeSettings;
  }
  if (null != prop) {
    const findIndexResult = memo2.findIndex((type) => type.type === syncedClientTheme(dependencyMap[6]).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
    if (findIndexResult >= 0) {
      return findIndexResult;
    }
  }
  let prop1;
  if (syncedClientTheme != null) {
    prop1 = syncedClientTheme.backgroundGradientPresetId;
  }
  if (null != prop1) {
    const findIndexResult1 = memo2.findIndex((type) => {
      let tmp = type.type === ClientThemesTypes.ClientThemeType.BACKGROUND_GRADIENT_PRESET;
      if (tmp) {
        tmp = type.id === syncedClientTheme.backgroundGradientPresetId;
      }
      return tmp;
    });
    if (findIndexResult1 >= 0) {
      return findIndexResult1;
    }
  }
  closure_1 = ThemeStore.themePreferenceForSystemTheme(systemTheme);
  const findIndexResult2 = memo2.findIndex((theme) => theme.theme === closure_1);
  let num3 = 0;
  if (findIndexResult2 >= 0) {
    num3 = findIndexResult2;
  }
  return num3;
};
export const enableSameAsDeviceTheme = function enableSameAsDeviceTheme() {
  const result = SameAsDeviceThemeUtils.enableSameAsDeviceTheme(CustomThemeMobileStore.getCustomTheme());
};
export const disableSameAsDeviceTheme = function disableSameAsDeviceTheme() {
  ThemeActionCreators.setUseSystemTheme(SystemThemeState.OFF);
  const result = ThemeActionCreators.clearSyncedClientThemes();
};
export const trackClientThemeUpdated = function trackClientThemeUpdated(arg0) {
  ({ isPersisted, isSynced, themeName, analyticsLocations } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.CLIENT_THEME_UPDATED, { feature_name: constants.CLIENT_THEME, theme_name: themeName, is_persisted: isPersisted, is_synced: isSynced, location_stack: analyticsLocations });
};
export const getUserThemeIndex = function getUserThemeIndex(userPreset, c1, memo1, c3, c4) {
  if (null != userPreset) {
    const findIndexResult = memo1.findIndex((type) => type.type === userPreset(1231).ClientThemeType.BACKGROUND_GRADIENT_PRESET);
    const findIndexResult1 = closure_7.findIndex((id) => id.id === userPreset.id);
    let num4 = 0;
    if (findIndexResult >= 0) {
      num4 = 0;
      if (findIndexResult1 >= 0) {
        num4 = findIndexResult + findIndexResult1;
      }
    }
    return num4;
  } else {
    if (c4) {
      if (tmp >= 0) {
        return memo1.findIndex((type) => type.type === userPreset(1231).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT);
      }
    }
    const str = "system";
    const findIndexResult2 = memo1.findIndex((theme) => theme.theme === str);
    let num2 = 0;
    if (findIndexResult2 >= 0) {
      num2 = findIndexResult2;
    }
    return num2;
  }
};
