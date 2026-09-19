// Module ID: 17798
// Function ID: 17799
// Name: closeIFrameModal
// Dependencies: [17796, 4959, 573, 2]
// Exports: default

// Module 17798 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17796 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};
