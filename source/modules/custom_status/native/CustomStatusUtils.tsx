// Module ID: 11248
// Function ID: 11249
// Name: CustomStatusUtils
// Dependencies: [4839, 11249, 1896, 2]
// Exports: openEditCustomStatusModal

// Module 11248 (CustomStatusUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11249, dependencyMap.paths), { analyticsLocations, prompt: _prompt }, undefined, { presentation: "modal" });
};
