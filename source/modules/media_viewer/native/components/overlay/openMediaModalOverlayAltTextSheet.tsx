// Module ID: 11628
// Function ID: 11629
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4573, 11629, 1896, 2]
// Exports: default

// Module 11628 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11629, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
