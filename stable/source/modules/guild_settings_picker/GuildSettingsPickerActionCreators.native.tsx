// Module ID: 13891
// Function ID: 13892
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4527, 13892, 1896, 2]
// Exports: openGuildSettingsPickerModal

// Module 13891 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13892, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
