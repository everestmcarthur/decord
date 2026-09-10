// Module ID: 16193
// Function ID: 16194
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4808, 16194, 1896, 2]
// Exports: default

// Module 16193 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16194, dependencyMap.paths), { categoryId });
};
