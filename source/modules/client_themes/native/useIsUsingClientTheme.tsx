// Module ID: 7994
// Function ID: 7995
// Name: useIsUsingClientTheme
// Dependencies: [7995, 2]
// Exports: default

// Module 7994 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
