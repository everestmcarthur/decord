// Module ID: 18201
// Function ID: 18202
// Name: AVErrorNoAudioInputDetected
// Dependencies: [1958, 1909, 4745, 1074, 9348, 18202, 2]

// Module 18201 (AVErrorNoAudioInputDetected)
import AVError from "AVError" /* 9348 */;
import AVErrorContext from "AVErrorContext" /* 18202 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4745 */;

require = fn;
const Constants = fn(1074);
({ InputModes: hasOwnProperty, RTCConnectionStates: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    const channel = ChannelStore.getChannel(voiceState.voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      let suppress;
      if (voiceState != null) {
        suppress = voiceState.suppress;
      }
      isGuildStageVoiceResult = suppress;
    }
    if (null != channel) {
      if (null != RTCConnectionStore.getMediaSessionId()) {
        if (!MediaEngineStore.getInputDetectedThisConnection()) {
          if (RTCConnectionStore.getState() === constants2.RTC_CONNECTED) {
            if (obj5.getSettings().mode === constants.VOICE_ACTIVITY) {
              if (obj5.getSettings().silenceWarning) {
                if (false === obj5.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!obj5.isSelfMute()) {
                      const obj = { type: AVError.AVError.NO_AUDIO_INPUT_DETECTED };
                      const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
                      const items = [obj];
                      return items;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};
