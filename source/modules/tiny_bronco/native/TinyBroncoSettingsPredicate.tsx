// Module ID: 14768
// Function ID: 14769
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14769, 14770, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14768 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14769 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14770 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
