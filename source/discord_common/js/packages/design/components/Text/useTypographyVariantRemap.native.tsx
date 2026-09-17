// Module ID: 4646
// Function ID: 4647
// Name: useTypographyVariantRemap
// Dependencies: [4357, 4647, 2]
// Exports: useTypographyVariantRemap

// Module 4646 (useTypographyVariantRemap)
import ThemeContext from "ThemeContext" /* 4357 */;
import typographyVariantRemap from "typographyVariantRemap" /* 4647 */;
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
