// Module ID: 16241
// Function ID: 16242
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4841, 16242, 1897, 2]
// Exports: default

// Module 16241 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16242, dependencyMap.paths), { categoryId });
};
