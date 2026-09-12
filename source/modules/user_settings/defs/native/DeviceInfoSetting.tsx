// Module ID: 15645
// Function ID: 15646
// Name: DeviceInfoSetting
// Dependencies: [15644, 4615, 11601, 1114, 15646, 1935, 2]

// Module 15645 (DeviceInfoSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import DeviceUtils from "DeviceUtils" /* 4615 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15644 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15646 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = CopyClientInfoSetting;
    const clientInfoString = obj.getClientInfoString(DeviceUtils.getDeviceInfo());
    const obj3 = CopyClientInfoSetting;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DeviceUtils.getSystemVersion()) + ")";
  },
  usePredicate: UserSettings.DeveloperMode.useSetting
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = CopyClientInfoSetting;
    const clientInfoString = obj.getClientInfoString(DeviceUtils.getDeviceInfo());
    const obj3 = CopyClientInfoSetting;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DeviceUtils.getSystemVersion()) + ")";
  },
  usePredicate: UserSettings.DeveloperMode.useSetting
});
