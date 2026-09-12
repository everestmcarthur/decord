// Module ID: 16206
// Function ID: 16207
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4839, 16207, 1896, 2]
// Exports: default

// Module 16206 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16207, dependencyMap.paths), { categoryId });
};
