// Module ID: 17670
// Function ID: 17671
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4572, 4808, 17671, 1896, 2]
// Exports: default

// Module 17670 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17671, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
