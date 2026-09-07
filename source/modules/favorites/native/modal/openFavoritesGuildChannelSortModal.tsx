// Module ID: 16144
// Function ID: 16145
// Name: openFavoritesGuildChannelSortModal
// Dependencies: [4763, 16145, 1896, 2]
// Exports: closeFavoritesGuildChannelSortModal, default

// Module 16144 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4763.pushLazy(asyncRequireImpl(16145, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4763.popWithKey(FavoritesGuildChannelSortModal);
};
