// Module ID: 10366
// Function ID: 10367
// Name: openFavoritesGuildLimitUpsell
// Dependencies: [4605, 10367, 1897, 2]
// Exports: default

// Module 10366 (openFavoritesGuildLimitUpsell)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const FavoritesGuildUpsellSheet = "FavoritesGuildUpsellSheet";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildLimitUpsell.native.tsx");

export default function openFavoritesGuildLimitUpsell(limit) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10367, dependencyMap.paths), FavoritesGuildUpsellSheet, { limit, variant: "limit_reached", source: "limit_reached" });
};
export const FAVORITES_UPSELL_SHEET_KEY = "FavoritesGuildUpsellSheet";
