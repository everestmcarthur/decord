// Module ID: 13994
// Function ID: 13995
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4605, 13995, 1897, 2]
// Exports: openGuildSettingsPickerModal

// Module 13994 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13995, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
