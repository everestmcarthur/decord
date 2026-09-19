// Module ID: 13021
// Function ID: 13022
// Name: CreateGameInvitePostModalActionCreators
// Dependencies: [4959, 13022, 1980, 2]
// Exports: closeCreateGameInvitePostModal, openCreateGameInvitePostModal

// Module 13021 (CreateGameInvitePostModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13022, dependencyMap.paths), merged, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
