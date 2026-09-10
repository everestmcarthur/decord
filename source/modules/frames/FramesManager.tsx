// Module ID: 9601
// Function ID: 9602
// Name: FramesManager
// Dependencies: [9542, 1074, 4479, 7132, 9550, 1242, 573, 2]

// Module 9601 (FramesManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import FramesStore from "FramesStore" /* 9542 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7132 */;

let require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, RPCCloseCodes: hasOwnProperty } = Constants);
const TransportTypes = fn(4479).TransportTypes;
class FramesManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      RPC_APP_DISCONNECTED(arg0) {
            applyArgumentsResult.handleRPCDisconnect(arg0);
          },
      FRAME_LAUNCH(arg0) {
            ({ applicationId, analyticsContext } = arg0);
            const result = applyArgumentsResult(9550).trackFrameSessionStart(applicationId, analyticsContext);
          },
      FRAME_LAUNCH_FAIL(arg0) {
            ({ applicationId, error, analyticsContext } = arg0);
            const result = applyArgumentsResult(9550).trackFrameSessionStartFailed(applicationId, error, analyticsContext);
          },
      FRAME_STOP(applicationId) {
            applyArgumentsResult(9550).trackFrameSessionEnd(applicationId.applicationId);
          }
    };
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(arg0) {
      ({ reason, source } = arg0);
      if (null != reason) {
        if (source.type === TransportTypes.POST_MESSAGE) {
          const frameByIframeId = FramesStore.getFrameByIframeId(source.iframeId);
          if (null != frameByIframeId) {
            applyArgumentsResult.leaveFrame(frameByIframeId.id);
            if (reason.code !== constants2.CLOSE_NORMAL) {
              const obj4 = { rpc_close_code: null, rpc_message: null, application_id: null };
              ({ code: obj2.rpc_close_code, message: obj2.rpc_message } = reason);
              obj4.application_id = frameByIframeId.applicationId;
              AnalyticsUtilsDefault.track(constants.ACTIVITY_CLOSED_RPC_ERROR, obj4);
              const result = obj3.showRPCDisconnectErrorUI(reason);
            }
            obj3 = applyArgumentsResult;
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
FramesManager.prototype["leaveFrame"] = function leaveFrame(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    ({ applicationId: obj2.applicationId, id: obj2.frameId } = frame);
    DispatcherDefault.dispatch({ type: "FRAME_STOP", applicationId: null, frameId: null });
    const obj3 = { type: "FRAME_STOP", applicationId: null, frameId: null };
  }
};
FramesManager.displayName = "FramesManager";
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/FramesManager.tsx");

export default FramesManager;
