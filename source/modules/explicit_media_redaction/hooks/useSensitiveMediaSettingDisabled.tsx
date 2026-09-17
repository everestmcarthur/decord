// Module ID: 14947
// Function ID: 14948
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14948, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14947 (useSensitiveMediaSettingDisabled)
import useParentalControlSettings from "useParentalControlSettings" /* 14948 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlSettings.useIsParentallyControlled();
};
