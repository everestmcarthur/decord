// Module ID: 11890
// Function ID: 11891
// Dependencies: [573, 4763, 11891, 1896, 2]

// Module 11890
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = dispatcherDefault;
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    _modDef4763.pushLazy(asyncRequireImpl(11891, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    _modDef4763.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = _modDef4763;
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};
