// Module ID: 16368
// Function ID: 16369
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4925, 16369, 1897, 2]
// Exports: default

// Module 16368 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16369, dependencyMap.paths), { categoryId });
};
