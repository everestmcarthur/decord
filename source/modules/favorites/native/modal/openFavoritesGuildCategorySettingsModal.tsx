// Module ID: 16271
// Function ID: 16272
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4843, 16272, 1897, 2]
// Exports: default

// Module 16271 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16272, dependencyMap.paths), { categoryId });
};
