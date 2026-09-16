// Module ID: 7988
// Function ID: 7989
// Name: useIsUsingClientTheme
// Dependencies: [7989, 2]
// Exports: default

// Module 7988 (useIsUsingClientTheme)
import useActiveTheme from "useActiveTheme" /* 7989 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/useIsUsingClientTheme.tsx");

export default function useIsUsingClientTheme() {
  return useActiveTheme.useIsClientThemeOrCustomThemeActive();
};
