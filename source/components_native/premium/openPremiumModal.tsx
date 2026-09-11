// Module ID: 9485
// Function ID: 9486
// Name: openPremiumModal
// Dependencies: [4810, 7486, 1896, 2]
// Exports: default

// Module 9485 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7486, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};
