// Module ID: 11665
// Function ID: 11666
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4603, 11666, 1896, 2]
// Exports: default

// Module 11665 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11666, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
