// Module ID: 14912
// Function ID: 14913
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14913, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14912 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
