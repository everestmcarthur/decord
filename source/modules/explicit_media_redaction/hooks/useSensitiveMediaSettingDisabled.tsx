// Module ID: 15041
// Function ID: 15042
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15042, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15041 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15042 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
