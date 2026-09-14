// Module ID: 12016
// Function ID: 12017
// Name: AppealIngestionModalActionCreators
// Dependencies: [573, 4839, 12017, 1896, 2]

// Module 12016 (AppealIngestionModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId });
    const obj2 = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12017, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
