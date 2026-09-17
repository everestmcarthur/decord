// Module ID: 14002
// Function ID: 14003
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4607, 14003, 1897, 2]
// Exports: openGuildSettingsPickerModal

// Module 14002 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14003, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
