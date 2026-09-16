// Module ID: 18054
// Function ID: 18055
// Name: AVErrorStreamReconnecting
// Dependencies: [1074, 9253, 18044, 4690, 2]

// Module 18054 (AVErrorStreamReconnecting)
import Constants from "Constants" /* 1074 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4690 */;
import AVError from "AVError" /* 9253 */;
import AVErrorContext from "AVErrorContext" /* 18044 */;
import size from "module_2" /* 2 */;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((item) => {
      const obj = { type: AVError.AVError.STREAM_RECONNECTING };
      const obj2 = AVErrorContext;
      const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(item)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
