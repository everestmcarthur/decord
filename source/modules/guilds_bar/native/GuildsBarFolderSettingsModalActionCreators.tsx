// Module ID: 16383
// Function ID: 16384
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [4839, 16384, 1896, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 16383 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16384, dependencyMap.paths), { folderId }, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
