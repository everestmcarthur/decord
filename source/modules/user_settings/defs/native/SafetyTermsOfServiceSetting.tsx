// Module ID: 15999
// Function ID: 16000
// Name: SafetyTermsOfServiceSetting
// Dependencies: [8091, 1074, 4332, 11614, 1115, 2]

// Module 15999 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4332 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lfC1KR);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    LinkingDefault.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
