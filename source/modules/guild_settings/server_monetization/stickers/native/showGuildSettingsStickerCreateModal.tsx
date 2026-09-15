// Module ID: 17730
// Function ID: 17731
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4606, 4842, 17731, 1897, 2]
// Exports: default

// Module 17730 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17731, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
