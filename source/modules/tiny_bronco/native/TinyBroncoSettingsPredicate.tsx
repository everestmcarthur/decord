// Module ID: 14685
// Function ID: 14686
// Name: useIsTinyBroncoSettingsEnabled
// Dependencies: [14686, 14687, 2]
// Exports: useIsTinyBroncoSettingsEnabled

// Module 14685 (useIsTinyBroncoSettingsEnabled)
import set from "set" /* 2 */;
import TINY_BRONCO_BLOG_URL from "TINY_BRONCO_BLOG_URL" /* 14686 */;
import useIsTinyBroncoEnabled from "useIsTinyBroncoEnabled" /* 14687 */;

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SETTINGS_LOCATION;
const result = set.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsPredicate.tsx");

export const useIsTinyBroncoSettingsEnabled = function useIsTinyBroncoSettingsEnabled() {
  return useIsTinyBroncoEnabled.useIsTinyBroncoEnabled(closure_2);
};
