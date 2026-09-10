// Module ID: 13963
// Function ID: 13964
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4572, 13964, 1896, 2]
// Exports: openGuildSettingsPickerModal

// Module 13963 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13964, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
