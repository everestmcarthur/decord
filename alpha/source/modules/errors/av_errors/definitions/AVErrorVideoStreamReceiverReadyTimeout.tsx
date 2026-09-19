// Module ID: 18295
// Function ID: 18296
// Name: AVErrorVideoStreamReceiverReadyTimeout
// Dependencies: [502, 9616, 9685, 2]

// Module 18295 (AVErrorVideoStreamReceiverReadyTimeout)
import AVError from "AVError" /* 9685 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VideoStreamStore from "VideoStreamStore" /* 9616 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(VideoStreamStore.getTimedoutVideos());
    const found = values.filter((item) => {
      ({ userId, videoStreamId } = item);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((item) => {
      const merged = Object.assign(item);
      return { type: AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
