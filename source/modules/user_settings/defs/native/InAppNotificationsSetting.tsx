// Module ID: 15571
// Function ID: 15572
// Name: InAppNotificationsSetting
// Dependencies: [8079, 1074, 1935, 10219, 1114, 2722, 1242, 11601, 14538, 15572, 2]

// Module 15571 (InAppNotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef2722 from "module_2722" /* 2722 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import FocusModeUtils from "FocusModeUtils" /* 10219 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14538 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15572 */;
import SettingBuilders_mod from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const obj = {
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = UserSettings.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    AnalyticsUtilsDefault.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, { notifications_in_app_enabled });
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
};
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t.rqEZdu);
};
obj2.useDescription = function useInAppNotificationsDescription() {
  let stringResult;
  if (obj.useFocusModeEnabled()) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.cIRG0s);
  }
  return stringResult;
};
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppNotificationsSetting");
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2722.sH5mu9);
};
obj3.useDescription = function useRedesignInAppNotificationsDescription() {
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const intl = util.intl;
  const string = intl.string;
  if (focusModeEnabled) {
    let stringResult = string(util.t.cIRG0s);
  } else {
    stringResult = string(_modDef2722["T/zMdV"]);
  }
  return stringResult;
};
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppNotificationsSetting");
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle1;
