// Module ID: 10525
// Function ID: 10526
// Name: StickersSearchUtils
// Dependencies: [5527, 7444, 2]
// Exports: searchAllStickers, searchSendableStickers, searchUnsendableStickers

// Module 10525 (StickersSearchUtils)
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5527 */;
import StickerSendability from "StickerSendability" /* 7444 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/StickersSearchUtils.tsx");

export const searchAllStickers = function searchAllStickers(arg0) {
  const items = [arg0];
  return AutocompleteUtilsDefault.queryStickers(items, true).map((sticker) => sticker.sticker);
};
export const searchSendableStickers = function searchSendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 === StickerSendability.StickerSendability.SENDABLE];
  return AutocompleteUtilsDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
export const searchUnsendableStickers = function searchUnsendableStickers(arg0, arg1) {
  const items = [arg0];
  const items1 = [arg1, (arg0, arg1) => arg1 !== StickerSendability.StickerSendability.SENDABLE];
  return AutocompleteUtilsDefault.queryStickers(items, true, items1).map((sticker) => sticker.sticker);
};
