// Module ID: 16144
// Function ID: 16145
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4777, 16145, 1896, 2]
// Exports: default

// Module 16144 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16145, dependencyMap.paths), { categoryId });
};
