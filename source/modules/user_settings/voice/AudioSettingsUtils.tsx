// Module ID: 9246
// Function ID: 9247
// Name: AudioSettingsUtils
// Dependencies: [1084, 4695, 9247, 5103, 2]
// Exports: coerceAudioContextForProto, snapVolumeToDefault

// Module 9246 (AudioSettingsUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4695 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5103 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProtoAudioSettingsContextTypes;
let result = size.fileFinishedImporting("modules/user_settings/voice/AudioSettingsUtils.tsx");

export const snapVolumeToDefault = function snapVolumeToDefault(USER, DEFAULT) {
  if (DEFAULT === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
    USER = tmp(9247).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = tmp(9247).AudioSettingsDefaultVolumes.USER;
  }
  let tmp3 = USER;
  const result = PerceptualVolumeUtils.amplitudeToPerceptual(USER);
  const tmpResult = PerceptualVolumeUtils;
  if (Math.abs(result - tmpResult2.amplitudeToPerceptual(USER)) < 1) {
    tmp3 = USER;
  }
  return tmp3;
};
export const coerceAudioContextForProto = function coerceAudioContextForProto(arg0) {
  if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === arg0) {
    return constants.USER;
  } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === arg0) {
    return constants.STREAM;
  }
};
