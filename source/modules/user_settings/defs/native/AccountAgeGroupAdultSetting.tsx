// Module ID: 14758
// Function ID: 14759
// Dependencies: [7975, 4773, 5423, 14685, 11473, 1114, 2]

// Module 14758
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4773 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 5423 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import useIsTinyBroncoSettingsEnabled from "useIsTinyBroncoSettingsEnabled" /* 14685 */;
import createToggle from "createToggle" /* 11473 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/52UYy"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const obj = useAgeVerificationRunner;
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner;
    let hasAgeGatedFeatures = isFeatureAgeGated.useHasAgeGatedFeatures();
    const obj3 = isFeatureAgeGated;
    const isTinyBroncoSettingsEnabled = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/52UYy"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XxRj7f);
  },
  usePredicate: function useAccountAgeGroupAdultSettingPredicate() {
    const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
    const obj = useAgeVerificationRunner;
    const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
    const obj2 = useAgeVerificationRunner;
    let hasAgeGatedFeatures = isFeatureAgeGated.useHasAgeGatedFeatures();
    const obj3 = isFeatureAgeGated;
    const isTinyBroncoSettingsEnabled = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled();
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = isAgeVerified;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isVerifiedTeen;
    }
    if (hasAgeGatedFeatures) {
      hasAgeGatedFeatures = !isTinyBroncoSettingsEnabled;
    }
    return hasAgeGatedFeatures;
  }
});
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAdultSetting.tsx");

export default createStaticResult;
