// Module ID: 11355
// Function ID: 11356
// Name: useEmojiColorPalette
// Dependencies: [4599, 1183, 504, 4458, 8032, 2]
// Exports: useEmojiColorPalette

// Module 11355 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4458 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8032 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiColorPalette.tsx");

export const useEmojiColorPalette = function useEmojiColorPalette(burst_colors) {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => saturation.saturation);
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  return EmojiColorUtils.buildEmojiColorPalette(burst_colors, stateFromStores, stateFromStores1);
};
