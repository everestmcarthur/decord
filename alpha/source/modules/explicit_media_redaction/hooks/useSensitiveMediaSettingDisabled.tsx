// Module ID: 15095
// Function ID: 15096
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [15096, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 15095 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 15096 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
