// Module ID: 13943
// Function ID: 13944
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4574, 13944, 1896, 2]
// Exports: openGuildSettingsPickerModal

// Module 13943 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13944, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
