// Module ID: 18213
// Function ID: 18214
// Name: AVErrorScreenshareOSError
// Dependencies: [1364, 9348, 18202, 4774, 2]

// Module 18213 (AVErrorScreenshareOSError)
import AVError from "AVError" /* 9348 */;
import size from "module_2" /* 2 */;

let closure_2 = BigInt(-3821);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorScreenshareOSError.tsx");

export const AVErrorScreenshareOSErrorDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((errorCode) => null != errorCode.errorCode);
    return found.map((errorCode) => {
      const obj = { type: AVError.AVError.SCREENSHARE_OS_ERROR, errorMessage: null };
      if (obj2.isMac()) {
        if (str === closure_1_2) {
          const _HermesInternal = HermesInternal;
          let combined = "" + str + " - your Mac may be low on disk space";
        }
        obj.errorMessage = combined;
        const tmpResult = tmp(18202);
        const merged = Object.assign(tmpResult.getStreamErrorContext(tmp(4774).encodeStreamKey(errorCode)));
        return obj;
      }
      combined = str.toString();
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
