// Module ID: 10666
// Function ID: 10667
// Name: utils/openGiftModal
// Dependencies: [4763, 10667, 1896, 2]
// Exports: openGiftModal

// Module 10666 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10667, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};
