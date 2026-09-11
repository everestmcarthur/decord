// Module ID: 15940
// Function ID: 15941
// Name: SafetyTermsOfServiceSetting
// Dependencies: [8050, 1074, 4301, 11564, 1114, 2]

// Module 15940 (SafetyTermsOfServiceSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import LinkingDefault from "Linking" /* 4301 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
