// Module ID: 10981
// Function ID: 10982
// Name: openFavoritesGuildAddChannelModal
// Dependencies: [10982, 10983, 1896, 4763, 2]
// Exports: closeFavoritesGuildAddChannelModal, default

// Module 10981 (openFavoritesGuildAddChannelModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10982 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = set.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(10983, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  _modDef4763.popWithKey(FavoritesGuildAddChannelModal);
};
