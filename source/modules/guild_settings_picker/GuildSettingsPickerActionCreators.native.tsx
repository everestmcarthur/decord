// Module ID: 13981
// Function ID: 13982
// Name: GuildSettingsPickerActionCreators
// Dependencies: [4606, 13982, 1897, 2]
// Exports: openGuildSettingsPickerModal

// Module 13981 (GuildSettingsPickerActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13982, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
