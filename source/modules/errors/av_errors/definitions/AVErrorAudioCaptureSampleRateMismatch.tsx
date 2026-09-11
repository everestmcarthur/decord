// Module ID: 17932
// Function ID: 17933
// Name: AVErrorAudioCaptureSampleRateMismatch
// Dependencies: [4645, 1908, 4630, 1090, 9202, 17920, 2]

// Module 17932 (AVErrorAudioCaptureSampleRateMismatch)
import DurationsDefault from "Durations" /* 1090 */;
import AVError from "AVError" /* 9202 */;
import AVErrorContext from "AVErrorContext" /* 17920 */;
import MediaEngineStatsStore from "MediaEngineStatsStore" /* 4645 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4630 */;

require = fn;
let closure_5 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx");

export const AVErrorAudioCaptureSampleRateMismatchDefinition = {
  getActiveErrors() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let num;
    if (rTCConnection != null) {
      num = rTCConnection.getDurationSeconds();
    }
    if (num == null) {
      num = 0;
    }
    if (num >= 30) {
      const _performance = performance;
      if (nowResult - MediaEngineStore.getLastAudioInputDeviceChangeTimestamp() >= closure_5) {
        const rTCConnection1 = RTCConnectionStore.getRTCConnection();
        let mediaEngineConnectionId;
        if (rTCConnection1 != null) {
          mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
        }
        const connectionStats = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        let num2;
        if (connectionStats != null) {
          const outbound = connectionStats.stats.rtp.outbound;
          const found = outbound.find((type) => "audio" === type.type);
          if (found != null) {
            num2 = found.sampleRateMismatchPercent;
          }
        }
        if (num2 == null) {
          num2 = 0;
        }
        const _Math = Math;
        let tmp5;
        if (Math.abs(num2) > 30) {
          const obj2 = { type: AVError.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH, audioCaptureSampleRateMismatchPercent: num2 };
          const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
          const items = [obj2];
          tmp5 = items;
        }
        return tmp5;
      }
      nowResult = performance.now();
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};
