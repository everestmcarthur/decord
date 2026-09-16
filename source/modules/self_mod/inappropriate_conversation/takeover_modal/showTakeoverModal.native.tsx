// Module ID: 17540
// Function ID: 17541
// Name: showTakeoverModal
// Dependencies: [11509, 11119, 4841, 15842, 1897, 2]
// Exports: showTakeoverModal

// Module 17540 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import Constants from "Constants" /* 11509 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15842, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
