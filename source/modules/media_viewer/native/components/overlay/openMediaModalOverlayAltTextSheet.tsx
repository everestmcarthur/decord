// Module ID: 11606
// Function ID: 11607
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4572, 11607, 1896, 2]
// Exports: default

// Module 11606 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11607, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
