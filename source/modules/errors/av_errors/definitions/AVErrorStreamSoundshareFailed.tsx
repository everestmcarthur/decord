// Module ID: 17845
// Function ID: 17846
// Name: AVErrorStreamSoundshareFailedDefinition
// Dependencies: [4582, 4608, 1074, 9115, 17837, 4612, 2]

// Module 17845 (AVErrorStreamSoundshareFailedDefinition)
import isStreamKey from "isStreamKey" /* 4612 */;
import mapped from "mapped" /* 9115 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17837 */;
import closure_2 from "reset" /* 4582 */;
import closure_3 from "getHookError" /* 4608 */;
import { MediaEngineHookTypes } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != hookError.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: null };
        obj[0] = mapped.AVError.STREAM_SOUNDSHARE_FAILED;
        const obj2 = getVoiceChannelErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(isStreamKey.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
        const obj3 = isStreamKey;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
