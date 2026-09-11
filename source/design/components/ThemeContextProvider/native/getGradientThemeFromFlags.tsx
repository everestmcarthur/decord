// Module ID: 4316
// Function ID: 4317
// Name: getGradientThemeFromFlags
// Dependencies: [4317, 2]
// Exports: getGradientThemeFromFlags

// Module 4316 (getGradientThemeFromFlags)
import native from "native" /* 4317 */;
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
