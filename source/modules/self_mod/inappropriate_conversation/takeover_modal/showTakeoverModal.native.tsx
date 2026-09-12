// Module ID: 17444
// Function ID: 17445
// Name: showTakeoverModal
// Dependencies: [11496, 11100, 4839, 15811, 1896, 2]
// Exports: showTakeoverModal

// Module 17444 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import Constants from "Constants" /* 11496 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15811, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
