// Module ID: 16359
// Function ID: 16360
// Name: GuildsBarFolderSettingsModalActionCreators
// Dependencies: [4810, 16360, 1896, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 16359 (GuildsBarFolderSettingsModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(folderId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16360, dependencyMap.paths), { folderId }, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
