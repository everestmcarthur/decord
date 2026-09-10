// Module ID: 14852
// Function ID: 14853
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14853, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14852 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14853 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
