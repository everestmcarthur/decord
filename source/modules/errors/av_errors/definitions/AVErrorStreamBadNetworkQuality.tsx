// Module ID: 17927
// Function ID: 17928
// Name: AVErrorStreamBadNetworkQuality
// Dependencies: [4646, 1074, 9202, 17920, 1369, 2]

// Module 17927 (AVErrorStreamBadNetworkQuality)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AVError from "AVError" /* 9202 */;
import AVErrorContext from "AVErrorContext" /* 17920 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4646 */;

require = fn;
const RTCConnectionQuality = fn(1074).RTCConnectionQuality;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((item) => {
      let tmp = null;
      if (quality.getQuality(item) === constants.BAD) {
        const obj = { type: AVError.AVError.STREAM_BAD_NETWORK_QUALITY };
        const merged = Object.assign(AVErrorContext.getStreamErrorContext(item));
        tmp = obj;
      }
      return tmp;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
