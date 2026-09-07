// Module ID: 13891
// Function ID: 13892
// Name: openGuildSettingsPickerModal
// Dependencies: [4527, 13892, 1896, 2]
// Exports: openGuildSettingsPickerModal

// Module 13891 (openGuildSettingsPickerModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerActionCreators.native.tsx");

export const openGuildSettingsPickerModal = function openGuildSettingsPickerModal(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13892, dependencyMap.paths), "GuildSettingsPickerBottomSheet", arg0);
};
