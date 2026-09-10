// Module ID: 11566
// Function ID: 11567
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4541, 11567, 1896, 2]
// Exports: default

// Module 11566 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11567, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
