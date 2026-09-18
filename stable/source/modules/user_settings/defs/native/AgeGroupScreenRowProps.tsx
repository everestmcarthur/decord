// Module ID: 14760
// Function ID: 14761
// Name: AgeGroupScreenRowProps
// Dependencies: [8412, 8414, 1114, 2946, 4773, 14685, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 14760 (AgeGroupScreenRowProps)
import util from "util" /* 1114 */;
import _modDef2946 from "module_2946" /* 2946 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8412 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8414 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14685 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2946.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2946.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true
};
export const useShowAssignedAdultAgeGroupRow = function useShowAssignedAdultAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
};
export const useShowAccountStatusAgeGroupRow = function useShowAccountStatusAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
};
