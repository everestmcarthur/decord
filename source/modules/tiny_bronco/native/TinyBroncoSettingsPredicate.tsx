// Module ID: 14737
// Function ID: 14738
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14738, 14739, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14737 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14738 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14739 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
