// Module ID: 11685
// Function ID: 11686
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4607, 11686, 1897, 2]
// Exports: default

// Module 11685 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11686, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
