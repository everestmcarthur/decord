// Module ID: 17517
// Function ID: 17518
// Name: closeIFrameModal
// Dependencies: [17515, 4839, 573, 2]
// Exports: default

// Module 17517 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17515 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};
