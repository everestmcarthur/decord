// Module ID: 11784
// Function ID: 11785
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4723, 11785, 1980, 2]
// Exports: default

// Module 11784 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11785, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
