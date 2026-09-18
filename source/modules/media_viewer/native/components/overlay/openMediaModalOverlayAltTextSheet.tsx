// Module ID: 11775
// Function ID: 11776
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4689, 11776, 1897, 2]
// Exports: default

// Module 11775 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11776, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
