// Module ID: 11669
// Function ID: 11670
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4606, 11670, 1897, 2]
// Exports: default

// Module 11669 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11670, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
