// Module ID: 11540
// Function ID: 11541
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4527, 11541, 1896, 2]
// Exports: default

// Module 11540 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11541, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
