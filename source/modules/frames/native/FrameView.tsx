// Module ID: 16693
// Function ID: 16694
// Name: FrameView
// Dependencies: [32, 19, 9603, 9604, 1920, 21, 7237, 573, 9661, 16694, 9728, 16695, 16696, 9743, 504, 2]
// Exports: InlineFrameView

// Module 16693 (FrameView)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9661 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 16694 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9603 */;

require = fn;
function FrameViewInner(frame) {
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  let landscapeSafeAreasConfig = frame.portraitSafeAreasConfig;
  let setIsResetting;
  const data = frame(setIsResetting[6]).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  let first = tmp3[0];
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = noop.useLayoutEffect(() => {
    DispatcherDefault.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id });
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = noop.useCallback(() => {
    FramesNativeManagerDefault.leaveFrame(frame.id);
  }, items1);
  const callback1 = noop.useCallback((arg0, arg1) => frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, arg0, arg1), items2);
  if (!first) {
    first = null == data;
  }
  const obj = frame(setIsResetting[6]);
  const baseActivityView = frame(setIsResetting[10]).useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp3[1], application: data, setOrientationLockState: callback1 });
  setIsResetting = baseActivityView.setIsResetting;
  ({ isResetting, isLandscape } = baseActivityView);
  const merged = Object.assign(layoutMode(tmp2[11])(frame.data));
  const obj3 = { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null };
  const obj4 = {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: { instance_id: "example-cl-instance", platform: ActivityPlatform.MOBILE, discord_proxy_ticket: frame.data.proxyTicket },
    onLoadError: callback,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    webViewKey: null,
    safeAreasConfig: null
  };
  const obj2 = { instance_id: "example-cl-instance", platform: ActivityPlatform.MOBILE, discord_proxy_ticket: frame.data.proxyTicket };
  const tmpResult = frame(setIsResetting[10]);
  const tmp11 = layoutMode(setIsResetting[12]);
  obj4.allowPopups = frame(setIsResetting[13]).allowPopups(data);
  obj4.isPipOrGridMode = layoutMode === constants.PIP;
  obj4.webViewKey = frame(setIsResetting[8]).FRAME_WEB_VIEW_KEY;
  if (isLandscape) {
    landscapeSafeAreasConfig = frame.landscapeSafeAreasConfig;
  }
  obj4.safeAreasConfig = landscapeSafeAreasConfig;
  obj3.children = <tmp11 onActivityCrash={function onActivityCrash() {
    setIsResetting(true);
    const timerId = setTimeout(() => setIsResetting(false), 0);
  }} applicationId={frame.applicationId} frameId={frame.id} activityUrl={frame.data.url} queryParams={{ instance_id: "example-cl-instance", platform: ActivityPlatform.MOBILE, discord_proxy_ticket: frame.data.proxyTicket }} onLoadError={callback} allowPopups={null} referrerPolicy="origin" isPipOrGridMode={null} webViewKey={null} safeAreasConfig={null} />;
  return jsx(frame(setIsResetting[10]).BaseActivityView, { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null });
}
const FramesConstants = fn(9604);
({ asLaunched: metroRequire, FrameLayoutModes: closure_7 } = FramesConstants);
const ActivityPlatform = fn(1920).ActivityPlatform;
const jsx = fn(21).jsx;
const memoResult = noop.memo(function FrameViewGate(arg0) {
  const items = [FramesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_1_6(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const InlineFrameView = function InlineFrameView(frameId) {
  frameId = frameId.frameId;
  let tmp = null;
  const merged = Object.assign(frameId, Object.assign({ frameId: 0 }));
  const items = [FramesStore];
  const items1 = [frameId];
  const stateFromStores = frameId(504).useStateFromStores(items, () => timestampProducer(FramesStore.getFrame(frameId)), items1);
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp;
};
export const FrameView = memoResult;
