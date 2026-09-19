// Module ID: 18001
// Function ID: 18002
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4723, 4959, 18002, 1980, 2]
// Exports: default

// Module 18001 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18002, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
