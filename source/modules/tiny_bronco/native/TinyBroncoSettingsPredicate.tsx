// Module ID: 14711
// Function ID: 14712
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14712, 14713, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14711 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14712 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14713 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
