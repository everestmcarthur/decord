// Module ID: 15528
// Function ID: 15529
// Name: DataSavingModeSetting
// Dependencies: [1185, 8050, 504, 15526, 1935, 11564, 1114, 2]

// Module 15528 (DataSavingModeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15526 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

require = fn;
const SettingBuilders = fn(11564);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ix8XIj);
  },
  parent: fn(8050).MobileUserSettings.CHAT,
  useValue: function useDataSavingModeSettingValue() {
    const items = [UnsyncedUserSettingsStore];
    return initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  },
  onValueChange: function onDataSavingModeSettingValueChange(dataSavingMode) {
    const obj2 = { videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions: null, lowQualityImageMode: null, dataSavingMode: null };
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    obj2.viewImageDescriptions = ViewImageDescriptions.getSetting();
    obj2.lowQualityImageMode = UnsyncedUserSettingsStore.lowQualityImageMode;
    obj2.dataSavingMode = dataSavingMode;
    UserSettingsText.setDataSavingMode(obj2);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataSavingModeSetting.tsx");

export default toggle;
