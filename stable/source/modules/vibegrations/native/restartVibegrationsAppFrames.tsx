// Module ID: 13258
// Function ID: 13259
// Name: restartVibegrationsAppFrames
// Dependencies: [9516, 9574, 9513, 2]
// Exports: default

// Module 13258 (restartVibegrationsAppFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9513 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9574 */;
import FramesStore from "FramesStore" /* 9516 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/restartVibegrationsAppFrames.tsx");

export default function restartVibegrationsAppFrames(applicationId) {
  closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10003 of found) {
      let obj = FramesNativeManagerDefault;
      let leaveFrameResult = obj.leaveFrame(item10003.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId: arg0, surface: item10003.surface };
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      continue;
    }
  }
};
