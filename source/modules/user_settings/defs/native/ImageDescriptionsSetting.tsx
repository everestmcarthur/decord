// Module ID: 15525
// Function ID: 15526
// Name: ImageDescriptionsSetting
// Dependencies: [1185, 8049, 1935, 15526, 11562, 1114, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15525 (ImageDescriptionsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15526 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({ videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode, dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode });
}
const SettingBuilders = fn(11562);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8049).MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
