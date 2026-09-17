// Module ID: 14803
// Function ID: 14804
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14804, 14805, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14803 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14804 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14805 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
