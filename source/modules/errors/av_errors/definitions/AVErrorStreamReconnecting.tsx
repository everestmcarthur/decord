// Module ID: 17847
// Function ID: 17848
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: [1074, 9115, 17837, 4612, 2]

// Module 17847 (AVErrorStreamReconnectingDefinition)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const ApplicationStreamStates = ME.ApplicationStreamStates;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(9115).AVError.STREAM_RECONNECTING };
      const obj2 = callback(17837);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(4612).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
