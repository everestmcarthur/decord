// Module ID: 4612
// Function ID: 4613
// Name: useTypographyVariantRemap
// Dependencies: [4324, 4613, 2]
// Exports: useTypographyVariantRemap

// Module 4612 (useTypographyVariantRemap)
import ThemeContext from "ThemeContext" /* 4324 */;
import typographyVariantRemap from "typographyVariantRemap" /* 4613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx");

export const useTypographyVariantRemap = function useTypographyVariantRemap(variant, arg1) {
  let themeContext = ThemeContext.useThemeContext();
  if (themeContext == null) {
    themeContext = [];
  }
  let enabledExperiments = themeContext.enabledExperiments;
  if (enabledExperiments == null) {
    enabledExperiments = [];
  }
  return typographyVariantRemap.remapTypographyVariant(enabledExperiments, variant, arg1);
};
