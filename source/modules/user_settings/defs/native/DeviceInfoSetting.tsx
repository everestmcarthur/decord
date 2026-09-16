// Module ID: 15673
// Function ID: 15674
// Name: DeviceInfoSetting
// Dependencies: [15672, 4617, 11614, 1115, 15674, 1936, 2]

// Module 15673 (DeviceInfoSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import DeviceUtils from "DeviceUtils" /* 4617 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 15672 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15674 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
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
