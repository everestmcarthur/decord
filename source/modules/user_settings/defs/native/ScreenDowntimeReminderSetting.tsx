// Module ID: 15579
// Function ID: 15580
// Name: ScreenDowntimeReminderSetting
// Dependencies: [10173, 8050, 7667, 14966, 8738, 11564, 1114, 504, 15580, 2]

// Module 15579 (ScreenDowntimeReminderSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment" /* 7667 */;
import useUserLinks from "useUserLinks" /* 8738 */;
import useUserIsTeenAgeGroupDefault from "useUserIsTeenAgeGroup" /* 14966 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15580 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10173 */;

require = fn;
const SettingBuilders = fn(11564);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z6tZKH);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.TummoQ);
  },
  parent: fn(8050).MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const items = [NotificationSettingsStore];
    return initialize.useStateFromStores(items, () => NotificationSettingsStore.screenDowntimeReminder);
  },
  onValueChange(screen_downtime_reminder) {
    return NotificationActionCreatorsDefault.setScreenDowntimeReminder(screen_downtime_reminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = FamilyCenterV3Experiment.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const tmp2 = useUserIsTeenAgeGroupDefault();
    const hasActiveParentLinks = useUserLinks.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
