// Module ID: 10232
// Function ID: 10233
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4527, 10233, 1896, 2]
// Exports: default

// Module 10232 (openFavoritesGuildLimitUpsell)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { limit, variant: "limit_reached", source: "limit_reached" };
  obj.openLazy(asyncRequireImpl(10233, dependencyMap.paths), FavoritesGuildUpsellSheet, obj);
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
