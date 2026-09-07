// Module ID: 17335
// Function ID: 17336
// Name: showTakeoverModal
// Dependencies: [11368, 10973, 4763, 15725, 1896, 2]
// Exports: showTakeoverModal

// Module 17335 (showTakeoverModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10973 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 11368 */;

const TAKEOVER_MODAL_KEY = LOCATION_CONTEXT_MOBILE.TAKEOVER_MODAL_KEY;
const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = InappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    _modDef4763.pushLazy(asyncRequireImpl(15725, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = _modDef4763;
  }
};
