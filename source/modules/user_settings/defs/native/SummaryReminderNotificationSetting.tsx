// Module ID: 15515
// Function ID: 15516
// Name: toggle
// Dependencies: [7975, 11473, 1114, 1935, 15516, 2]

// Module 15515 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import onSummaryReminderNotificationSettingsChanged from "onSummaryReminderNotificationSettingsChanged" /* 15516 */;
import createToggle from "createToggle" /* 11473 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xEqC6q);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KmVXll);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableSummaryReminderNotifications.useSetting,
  onValueChange: onSummaryReminderNotificationSettingsChanged.onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xEqC6q);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.KmVXll);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.EnableSummaryReminderNotifications.useSetting,
  onValueChange: onSummaryReminderNotificationSettingsChanged.onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
