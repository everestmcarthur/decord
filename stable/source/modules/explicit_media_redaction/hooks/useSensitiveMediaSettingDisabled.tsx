// Module ID: 14826
// Function ID: 14827
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14827, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14826 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14827 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
