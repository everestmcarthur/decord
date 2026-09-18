// Module ID: 8077
// Function ID: 8078
// Name: useIsUsingClientTheme
// Dependencies: [8078, 2]
// Exports: default

// Module 8077 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 8078 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
