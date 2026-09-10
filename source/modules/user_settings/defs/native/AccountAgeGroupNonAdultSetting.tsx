// Module ID: 14787
// Function ID: 14788
// Name: AccountAgeGroupNonAdultSetting
// Dependencies: [7989, 8439, 8441, 4787, 1114, 5437, 14711, 11500, 2]

// Module 14787 (AccountAgeGroupNonAdultSetting)
import util from "util" /* 1114 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4787 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5437 */;
import SettingsConstants from "SettingsConstants" /* 7989 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8439 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8441 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14711 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
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
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.sK0dmH);
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
