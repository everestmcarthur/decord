// Module ID: 14939
// Function ID: 14940
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14940, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14939 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
