// Module ID: 7979
// Function ID: 7980
// Name: useIsUsingClientTheme
// Dependencies: [7980, 2]
// Exports: default

// Module 7979 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7980 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
