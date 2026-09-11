// Module ID: 17924
// Function ID: 17925
// Name: AVErrorStreamViewHighPacketLoss
// Dependencies: [4629, 502, 4646, 17923, 4659, 9202, 17920, 2]

// Module 17924 (AVErrorStreamViewHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4659 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4629 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4646 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = ApplicationStreamingStore.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        rTCConnection = rTCConnection.getRTCConnection(StreamKeyUtils.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (rTCConnection != null) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === id.getId()) {
          return arr;
        } else {
          const accumulatedStatsWithMinDatapoints = tmp(tmp2[3]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
              const obj2 = { type: tmp(tmp2[5]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              const tmpResult3 = tmp(tmp2[6]);
              const merged = Object.assign(tmpResult3.getStreamErrorContext(tmp(tmp2[4]).encodeStreamKey(ownerId)));
              arr.push(obj2);
              const tmpResult4 = tmp(tmp2[4]);
            }
          }
          return arr;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
