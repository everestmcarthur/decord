// Module ID: 16114
// Function ID: 16115
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4763, 16115, 1896, 2]
// Exports: default

// Module 16114 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16115, dependencyMap.paths), { categoryId });
};
