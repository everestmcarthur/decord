// Module ID: 9505
// Function ID: 9506
// Name: openPremiumModal
// Dependencies: [4959, 7652, 1980, 2]
// Exports: default

// Module 9505 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7652, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};
