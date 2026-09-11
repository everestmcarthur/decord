// Module ID: 15560
// Function ID: 15561
// Name: InAppMessageSoundsSetting
// Dependencies: [10193, 8049, 1114, 11562, 14503, 1608, 15550, 2]

// Module 15560 (InAppMessageSoundsSetting)
import util from "util" /* 1114 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14503 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15550 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 10193 */;
import SettingBuilders_mod from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = InAppMessageSoundsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jLCRyj);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wls+Ax"]);
  },
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  const isDeclarativeSettingsUIAvailable = notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppMessageSoundsSetting");
  return MetaQuestUtils.isMetaQuest() && !isDeclarativeSettingsUIAvailable;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  const isDeclarativeSettingsUIAvailable = notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppMessageSoundsSetting");
  return MetaQuestUtils.isMetaQuest() && isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
export const RedesignInAppMessageSoundsSetting = toggle1;
