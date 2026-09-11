// Module ID: 7947
// Function ID: 7948
// Name: useIsUsingClientTheme
// Dependencies: [7948, 2]
// Exports: default

// Module 7947 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7948 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
