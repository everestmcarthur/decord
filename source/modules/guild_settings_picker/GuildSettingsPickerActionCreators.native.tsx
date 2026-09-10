// Module ID: 13914
// Function ID: 13915
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4541, 13915, 1896, 2]
// Exports: openGuildSettingsPickerModal

// Module 13914 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13915, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
