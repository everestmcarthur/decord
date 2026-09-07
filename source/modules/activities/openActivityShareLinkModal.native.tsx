// Module ID: 14488
// Function ID: 14489
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4425, 4763, 14489, 1896, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14488 (ACTIVITY_SHARE_LINK_MODAL)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import getBestActiveInput from "getBestActiveInput" /* 4425 */;
import _modDef4763 from "module_4763" /* 4763 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = set.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  _modDef4763.pushLazy(asyncRequireImpl(14489, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  _modDef4763.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
