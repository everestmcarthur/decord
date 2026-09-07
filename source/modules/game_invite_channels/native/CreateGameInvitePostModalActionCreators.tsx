// Module ID: 12774
// Function ID: 12775
// Name: openCreateGameInvitePostModal
// Dependencies: [4763, 12775, 1896, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 12774 (openCreateGameInvitePostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "create-game-invite-post";
const result = set.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(closure_0) {
  _modDef4763.pushLazy(asyncRequireImpl(12775, dependencyMap.paths), closure_0, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  _modDef4763.popWithKey(c3);
};
