// Module ID: 11677
// Function ID: 11678
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4605, 11678, 1897, 2]
// Exports: default

// Module 11677 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11678, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
