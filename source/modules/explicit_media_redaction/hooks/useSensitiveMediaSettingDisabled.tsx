// Module ID: 14923
// Function ID: 14924
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14924, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14923 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14924 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
