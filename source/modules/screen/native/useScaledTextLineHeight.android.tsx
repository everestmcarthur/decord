// Module ID: 10208
// Function ID: 10209
// Name: useScaledTextLineHeight
// Dependencies: [10209, 4602, 5033, 2]
// Exports: scaleLineHeight, scaleTextLineHeight, useScaledTextLineHeight

// Module 10208 (useScaledTextLineHeight)
import Text_Text from "Text/Text" /* 4602 */;
import useFontScale from "useFontScale" /* 5033 */;
import NativeFontModuleDefault from "NativeFontModule" /* 10209 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/screen/native/useScaledTextLineHeight.android.tsx");

export const scaleLineHeight = function scaleLineHeight(arg0) {
  value = map.get(arg0);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(arg0);
    const result = map.set(arg0, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const scaleTextLineHeight = function scaleTextLineHeight(c10, fontScale) {
  const lineHeight = Text_Text.TextStyleSheet[c10].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
export const useScaledTextLineHeight = function useScaledTextLineHeight(beginSearch) {
  const fontScale = useFontScale.useFontScale();
  const lineHeight = Text_Text.TextStyleSheet[beginSearch].lineHeight;
  value = map.get(lineHeight);
  if (null == value) {
    const scaledHeightForText = NativeFontModuleDefault.getScaledHeightForText(lineHeight);
    const result = map.set(lineHeight, scaledHeightForText);
    value = scaledHeightForText;
  }
  return value;
};
