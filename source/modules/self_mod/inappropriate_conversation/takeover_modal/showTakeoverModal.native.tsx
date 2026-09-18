// Module ID: 17662
// Function ID: 17663
// Name: showTakeoverModal
// Dependencies: [11615, 11220, 4925, 15954, 1897, 2]
// Exports: showTakeoverModal

// Module 17662 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import Constants from "Constants" /* 11615 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15954, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
