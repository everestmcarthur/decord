// Module ID: 15627
// Function ID: 15628
// Name: SummaryReminderNotificationSetting
// Dependencies: [8091, 11614, 1115, 1936, 15628, 2]

// Module 15627 (SummaryReminderNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SummaryReminderNotificationUtils from "SummaryReminderNotificationUtils" /* 15628 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xEqC6q);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.KmVXll);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableSummaryReminderNotifications.useSetting,
  onValueChange: SummaryReminderNotificationUtils.onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
