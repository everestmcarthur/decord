// Module ID: 14951
// Function ID: 14952
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14952, 14953, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14951 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14952 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14953 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
