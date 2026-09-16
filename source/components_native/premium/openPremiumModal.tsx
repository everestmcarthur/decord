// Module ID: 9535
// Function ID: 9536
// Name: openPremiumModal
// Dependencies: [4841, 7522, 1897, 2]
// Exports: default

// Module 9535 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7522, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};
