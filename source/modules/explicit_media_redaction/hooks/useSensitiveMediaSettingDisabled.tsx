// Module ID: 14901
// Function ID: 14902
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14902, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14901 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
