// Module ID: 17415
// Function ID: 17416
// Name: FramePanelController
// Dependencies: [19, 4950, 9748, 9749, 9743, 21, 504, 9745, 17382, 17416, 2]
// Exports: default

// Module 17415 (FramePanelController)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9745 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17416 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4950 */;
import FramesStore from "FramesStore" /* 9748 */;

const require = fn;
const asLaunched = fn(9749).asLaunched;
const ActivityPanelModes = fn(9743).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let mainFrameId;
  const items = [FramesStore, ApplicationStore];
  const stateFromStoresObject = mainFrameId(504).useStateFromStoresObject(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    let mode;
    if (tmp != null) {
      mode = tmp.data.activityPanelMode;
    }
    if (mode == null) {
      mode = constants.DISCONNECTED;
    }
    let connectedActivityAppId;
    if (tmp != null) {
      connectedActivityAppId = tmp.applicationId;
    }
    let currentApp;
    if (null != connectedActivityAppId) {
      currentApp = application.getApplication(connectedActivityAppId);
    }
    let orientationLockStateForApp;
    if (tmp != null) {
      orientationLockStateForApp = tmp.data.orientationLock;
    }
    mainFrameId = undefined;
    if (tmp != null) {
      mainFrameId = tmp.id;
    }
    return { mainFrameId, mode, connectedActivityAppId, currentApp, orientationLockStateForApp };
  }, []);
  mainFrameId = stateFromStoresObject.mainFrameId;
  const items1 = [mainFrameId];
  ({ mode, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const callback = noop.useCallback((PIP) => {
    if (null != mainFrameId) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, PIP);
    }
  }, items1);
  let obj = mainFrameId(504);
  return jsx(mainFrameId(17382).BaseActivityPanelController, { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
};
