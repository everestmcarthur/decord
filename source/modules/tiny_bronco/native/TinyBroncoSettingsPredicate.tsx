// Module ID: 14795
// Function ID: 14796
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14796, 14797, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14795 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14796 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14797 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
