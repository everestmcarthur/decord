// Module ID: 17786
// Function ID: 17787
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4605, 4841, 17787, 1897, 2]
// Exports: default

// Module 17786 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17787, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
