// Module ID: 7924
// Function ID: 7925
// Name: useIsUsingClientTheme
// Dependencies: [7925, 2]
// Exports: default

// Module 7924 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
