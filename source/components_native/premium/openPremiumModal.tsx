// Module ID: 9546
// Function ID: 9547
// Name: openPremiumModal
// Dependencies: [4843, 7526, 1897, 2]
// Exports: default

// Module 9546 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7526, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};
