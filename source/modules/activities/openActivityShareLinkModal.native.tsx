// Module ID: 14573
// Function ID: 14574
// Name: openActivityShareLinkModal
// Dependencies: [4502, 4839, 14574, 1896, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14573 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  ChatInputUtils.dismissKeyboard();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14574, dependencyMap.paths), { applicationId, customId, linkId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
