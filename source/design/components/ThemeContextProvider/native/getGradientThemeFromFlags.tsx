// Module ID: 4314
// Function ID: 4315
// Name: getGradientThemeFromFlags
// Dependencies: [4315, 2]
// Exports: getGradientThemeFromFlags

// Module 4314 (getGradientThemeFromFlags)
import native from "native" /* 4315 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  native;
  let str = "dark";
  if (!hasThemeFlagResult) {
    let str2 = null;
    if (tmp3) {
      str2 = "light";
    }
    str = str2;
  }
  return str;
};
