// Module ID: 16182
// Function ID: 16183
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4809, 16183, 1896, 2]
// Exports: default

// Module 16182 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16183, dependencyMap.paths), { categoryId });
};
