// Module ID: 17928
// Function ID: 17929
// Name: AVErrorStreamSoundshareFailed
// Dependencies: [4629, 4655, 1074, 9202, 17920, 4659, 2]

// Module 17928 (AVErrorStreamSoundshareFailed)
import StreamKeyUtils from "StreamKeyUtils" /* 4659 */;
import AVError from "AVError" /* 9202 */;
import AVErrorContext from "AVErrorContext" /* 17920 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4629 */;
import HookErrorStore from "HookErrorStore" /* 4655 */;

require = fn;
const MediaEngineHookTypes = fn(1074).MediaEngineHookTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSoundshareFailed.tsx");

export const AVErrorStreamSoundshareFailedDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let tmp2;
    if (null != currentUserActiveStream) {
      if (null != HookErrorStore.getHookError(MediaEngineHookTypes.SOUND)) {
        const obj = { type: AVError.AVError.STREAM_SOUNDSHARE_FAILED };
        const obj2 = AVErrorContext;
        const merged = Object.assign(obj2.getStreamErrorContext(StreamKeyUtils.encodeStreamKey(currentUserActiveStream)));
        const items = [obj];
        tmp2 = items;
      }
    }
    return tmp2;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
