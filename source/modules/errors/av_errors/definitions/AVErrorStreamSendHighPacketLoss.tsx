// Module ID: 18049
// Function ID: 18050
// Name: AVErrorStreamSendHighPacketLoss
// Dependencies: [4660, 4677, 4690, 18047, 9253, 18044, 2]

// Module 18049 (AVErrorStreamSendHighPacketLoss)
import StreamKeyUtils from "StreamKeyUtils" /* 4690 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4660 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4677 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === obj.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(StreamKeyUtils.encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (rTCConnection != null) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        const accumulatedStatsWithMinDatapoints = tmp8(18047).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp6 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (10 < 100 * accumulatedStatsWithMinDatapoints.short.packetLossRate) {
            const obj2 = { type: tmp8(9253).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const tmp8Result3 = tmp8(18044);
            const merged = Object.assign(tmp8Result3.getStreamErrorContext(tmp8(4690).encodeStreamKey(currentUserActiveStream)));
            const items = [obj2];
            const tmp3 = items;
            const tmp8Result4 = tmp8(4690);
          }
          tmp6 = tmp3;
        }
        return tmp6;
      }
    }
    obj = ApplicationStreamingStore;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
