// Module ID: 17580
// Function ID: 17581
// Name: showGuildSettingsStickerCreateModal
// Dependencies: [4527, 4763, 17581, 1896, 2]
// Exports: default

// Module 17580 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17581, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};
