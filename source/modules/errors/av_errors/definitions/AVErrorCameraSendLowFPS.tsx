// Module ID: 18219
// Function ID: 18220
// Name: AVErrorCameraSendLowFPS
// Dependencies: [502, 1909, 4745, 1091, 18205, 9348, 18202, 2]

// Module 18219 (AVErrorCameraSendLowFPS)
import DurationsDefault from "Durations" /* 1091 */;
import AVErrorUtils from "AVErrorUtils" /* 18205 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4745 */;

require = fn;
let closure_5 = 20 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorCameraSendLowFPS.tsx");

export const AVErrorCameraSendLowFPSDefinition = {
  getActiveErrors() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    if (null == rTCConnection) {
      return null;
    } else {
      const mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      if (null == mediaEngineConnectionId) {
        return null;
      } else if (MediaEngineStore.isVideoEnabled()) {
        const lastNonZeroRemoteVideoSinkWantsTime = obj.getLastNonZeroRemoteVideoSinkWantsTime();
        if (null != lastNonZeroRemoteVideoSinkWantsTime) {
          const _performance = performance;
          if (performance.now() - lastNonZeroRemoteVideoSinkWantsTime < closure_5) {
            return null;
          }
        }
        if (rTCConnection.hasActiveRemoteWants()) {
          const accumulatedStatsWithMinDatapoints = AVErrorUtils.getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, AuthenticationStore.getId());
          let tmp7 = null;
          if (null != accumulatedStatsWithMinDatapoints) {
            if (accumulatedStatsWithMinDatapoints.short.frameRate < 10) {
              const obj2 = { type: tmp4(9348).AVError.CAMERA_SEND_LOW_FPS, userId: AuthenticationStore.getId() };
              const merged = Object.assign(tmp4(18202).getVoiceChannelErrorContext());
              const items = [obj2];
              const tmp4Result = tmp4(18202);
              const tmp8 = items;
            }
            tmp7 = tmp8;
          }
          return tmp7;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    obj = RTCConnectionStore;
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId;
  }
};
