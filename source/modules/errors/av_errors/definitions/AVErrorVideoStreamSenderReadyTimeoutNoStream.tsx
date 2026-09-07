// Module ID: 17852
// Function ID: 17853
// Name: AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition
// Dependencies: [502, 9482, 9115, 2]

// Module 17852 (AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition)
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "makeTimeoutKey" /* 9482 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorVideoStreamSenderReadyTimeoutNoStream.tsx");

export const AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition = {
  getActiveErrors() {
    const values = Object.values(timedoutVideos.getTimedoutVideos());
    const found = values.filter((arg0) => {
      ({ userId, videoStreamId } = arg0);
      let tmp = id.getId() === userId;
      if (tmp) {
        tmp = null == videoStreamId;
      }
      return tmp;
    });
    return found.map((arg0) => {
      const merged = Object.assign(arg0);
      return { type: callback(table[2]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM };
    });
  },
  makeErrorContextKey(mediaContext) {
    return "" + mediaContext.mediaContext + ":" + mediaContext.userId;
  }
};
