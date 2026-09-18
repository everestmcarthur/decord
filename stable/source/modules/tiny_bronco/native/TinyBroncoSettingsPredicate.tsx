// Module ID: 14685
// Function ID: 14686
// Name: TinyBroncoSettingsPredicate
// Dependencies: [14686, 14687, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14685 (TinyBroncoSettingsPredicate)
import TinyBroncoConstants from "TinyBroncoConstants" /* 14686 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 14687 */;
import size from "module_2" /* 2 */;

let closure_2 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_2);
};
