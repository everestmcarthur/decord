// Module ID: 17613
// Function ID: 17614
// Name: closeIFrameModal
// Dependencies: [17611, 4841, 573, 2]
// Exports: default

// Module 17613 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17611 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};
