// Module ID: 15554
// Function ID: 15555
// Name: IOSNativePhoneIntegrationSetting
// Dependencies: [8049, 15555, 1115, 1114, 1935, 11562, 14503, 15550, 2]

// Module 15554 (IOSNativePhoneIntegrationSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15550 */;
import CallKitMetricCollectionExperimentDefault from "CallKitMetricCollectionExperiment" /* 15555 */;
import SettingBuilders_mod from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.V6D0wU);
  },
  useValue: UserSettings.NativePhoneIntegrationEnabled.useSetting,
  onValueChange: UserSettings.NativePhoneIntegrationEnabled.updateSetting
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
  if (enabled) {
    enabled = PlatformUtils.isIOS();
  }
  if (enabled) {
    enabled = !obj3.useIsDeclarativeSettingsUIAvailable("IOSNativePhoneIntegrationSetting");
  }
  return enabled;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  let enabled = CallKitMetricCollectionExperimentDefault.useConfig({ location: "RedesignIOSNativePhoneIntegrationSetting" }).enabled;
  if (enabled) {
    enabled = PlatformUtils.isIOS();
  }
  if (enabled) {
    enabled = obj3.useIsDeclarativeSettingsUIAvailable("RedesignIOSNativePhoneIntegrationSetting");
  }
  return enabled;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
export const RedesignIOSNativePhoneIntegrationSetting = toggle1;
