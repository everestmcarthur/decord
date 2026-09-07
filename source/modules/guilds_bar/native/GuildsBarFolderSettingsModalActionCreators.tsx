// Module ID: 16291
// Function ID: 16292
// Name: showGuildsBarFolderModal
// Dependencies: [4763, 16292, 1896, 2]
// Exports: hideGuildsBarFolderModal, showGuildsBarFolderModal

// Module 16291 (showGuildsBarFolderModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const GUILD_FOLDER_SETTINGS_MODAL_KEY = "GUILD_FOLDER_SETTINGS_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModalActionCreators.tsx");

export const showGuildsBarFolderModal = function showGuildsBarFolderModal(closure_0) {
  let obj = _modDef4763;
  obj = { folderId: closure_0 };
  obj.pushLazy(asyncRequireImpl(16292, dependencyMap.paths), obj, GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
export const hideGuildsBarFolderModal = function hideGuildsBarFolderModal() {
  _modDef4763.popWithKey(GUILD_FOLDER_SETTINGS_MODAL_KEY);
};
