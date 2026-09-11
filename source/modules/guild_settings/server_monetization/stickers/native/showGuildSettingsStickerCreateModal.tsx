// Module ID: 17662
// Function ID: 17663
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4574, 4810, 17663, 1896, 2]
// Exports: default

// Module 17662 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17663, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
