// Module ID: 11264
// Function ID: 11265
// Name: useEmojiColorPalette
// Dependencies: [4552, 1183, 504, 4411, 7958, 2]
// Exports: useEmojiColorPalette

// Module 11264 (useEmojiColorPalette)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4411 */;
import EmojiColorUtils from "EmojiColorUtils" /* 7958 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
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
