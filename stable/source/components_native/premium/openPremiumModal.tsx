// Module ID: 9398
// Function ID: 9399
// Name: openPremiumModal
// Dependencies: [4763, 7412, 1896, 2]
// Exports: default

// Module 9398 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7412, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};
