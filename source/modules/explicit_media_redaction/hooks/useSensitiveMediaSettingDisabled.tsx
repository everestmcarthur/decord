// Module ID: 14826
// Function ID: 14827
// Name: useSensitiveMediaSettingDisabled
// Dependencies: [14827, 2]
// Exports: useSensitiveMediaSettingDisabled

// Module 14826 (useSensitiveMediaSettingDisabled)
import set from "set" /* 2 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14827 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx");

export const useSensitiveMediaSettingDisabled = function useSensitiveMediaSettingDisabled() {
  return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
};
