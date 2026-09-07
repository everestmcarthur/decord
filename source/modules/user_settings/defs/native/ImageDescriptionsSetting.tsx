// Module ID: 15465
// Function ID: 15466
// Name: onImageDescriptionSettingValueChange
// Dependencies: [1185, 7975, 1935, 15466, 11473, 1114, 2]
// Exports: onImageDescriptionSettingValueChange

// Module 15465 (onImageDescriptionSettingValueChange)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import UserSettingsText from "UserSettingsText" /* 15466 */;
import closure_2 from "CHANNEL_SIDEBAR_WIDTH" /* 1185 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  let obj = UserSettingsText;
  obj = { videoUploadQuality: closure_2.videoUploadQuality, viewImageDescriptions, lowQualityImageMode: closure_2.lowQualityImageMode, dataSavingMode: closure_2.dataSavingMode };
  obj.setImageDescriptions(obj);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w8j+yW"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = explicitContentFromProto.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default createToggle;
export { onImageDescriptionSettingValueChange };
