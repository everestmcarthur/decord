// Module ID: 14973
// Function ID: 14974
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [8194, 8643, 8645, 4935, 1115, 5593, 14897, 11714, 2]

// Module 14973 (AccountAgeGroupNonAdultSetting)
import util from "util" /* 1115 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4935 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5593 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8643 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8645 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14897 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/52UYy"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupNonAdultSettingTrailing() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const intl = util.intl;
    let stringResult = intl.string(util.t.lKDPGA);
    if (isAgeVerified) {
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.sK0dmH);
    }
    return stringResult;
  },
  onPress: function onAccountAgeGroupNonAdultSettingPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true,
  usePredicate: function AccountAgeGroupNonAdultSettingPredicate() {
    const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
    const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
    let hasTeenDefaults = RegionalFeatureConfigUtils.useHasTeenDefaults();
    const isTinyBroncoSettingsEnabled = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled();
    if (hasTeenDefaults) {
      let tmp5 = !isAgeVerified;
      if (isAgeVerified) {
        tmp5 = isVerifiedTeen;
      }
      hasTeenDefaults = tmp5;
    }
    if (hasTeenDefaults) {
      hasTeenDefaults = !isTinyBroncoSettingsEnabled;
    }
    return hasTeenDefaults;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupNonAdultSetting.tsx");

export default pressable;
