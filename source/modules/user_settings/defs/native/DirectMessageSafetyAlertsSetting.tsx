// Module ID: 14889
// Function ID: 14890
// Name: DirectMessageSafetyAlertsSetting
// Dependencies: [8050, 11973, 11063, 11066, 11564, 1114, 11065, 14890, 2]

// Module 14889 (DirectMessageSafetyAlertsSetting)
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11063 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11065 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11066 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 11973 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 14890 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.qFsx5q);
  },
  parent() {
    return MobileUserSettings.CONTENT_AND_SOCIAL;
  },
  useValue: useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault,
  onValueChange: updateDmSafetyAlertsSetting.updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = useUserIsConsideredAdultDefault();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
