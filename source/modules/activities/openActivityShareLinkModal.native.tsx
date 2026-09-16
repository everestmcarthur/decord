// Module ID: 14602
// Function ID: 14603
// Name: openActivityShareLinkModal
// Dependencies: [4504, 4841, 14603, 1897, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14602 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ChatInputUtils from "ChatInputUtils" /* 4504 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  ChatInputUtils.dismissKeyboard();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14603, dependencyMap.paths), { applicationId, customId, linkId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
