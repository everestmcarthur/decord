// Module ID: 14786
// Function ID: 14787
// Name: AgeGroupScreenRowProps
// Dependencies: [8439, 8441, 1114, 2946, 4787, 14711, 2]
// Exports: useShowAccountStatusAgeGroupRow, useShowAssignedAdultAgeGroupRow

// Module 14786 (AgeGroupScreenRowProps)
import util from "util" /* 1114 */;
import _modDef2946 from "module_2946" /* 2946 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4787 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8439 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8441 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14711 */;
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
