// Module ID: 17742
// Function ID: 17743
// Name: showTakeoverModal
// Dependencies: [11624, 11233, 4959, 16030, 1980, 2]
// Exports: showTakeoverModal

// Module 17742 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import Constants from "Constants" /* 11624 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16030, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
