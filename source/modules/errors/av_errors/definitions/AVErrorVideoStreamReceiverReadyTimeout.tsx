// Module ID: 17851
// Function ID: 17852
// Name: AVErrorVideoStreamReceiverReadyTimeoutDefinition
// Dependencies: [502, 9482, 9115, 2]

// Module 17851 (AVErrorVideoStreamReceiverReadyTimeoutDefinition)
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "makeTimeoutKey" /* 9482 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamReceiverReadyTimeout.tsx");

export const AVErrorVideoStreamReceiverReadyTimeoutDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      ({ userId, videoStreamId } = arg0);
      let tmp = id.getId() !== userId;
      if (tmp) {
        tmp = null != videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
