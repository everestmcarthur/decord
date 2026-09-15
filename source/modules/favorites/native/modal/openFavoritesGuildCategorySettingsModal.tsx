// Module ID: 16221
// Function ID: 16222
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4842, 16222, 1897, 2]
// Exports: default

// Module 16221 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16222, dependencyMap.paths), { categoryId });
};
