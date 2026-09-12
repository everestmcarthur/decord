// Module ID: 11664
// Function ID: 11665
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4603, 11665, 1896, 2]
// Exports: default

// Module 11664 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11665, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
