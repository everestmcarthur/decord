// Module ID: 7874
// Function ID: 7875
// Name: useIsUsingClientTheme
// Dependencies: [7875, 2]
// Exports: default

// Module 7874 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7875 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
