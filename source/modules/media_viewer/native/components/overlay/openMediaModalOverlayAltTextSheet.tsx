// Module ID: 11630
// Function ID: 11631
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4574, 11631, 1896, 2]
// Exports: default

// Module 11630 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11631, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
