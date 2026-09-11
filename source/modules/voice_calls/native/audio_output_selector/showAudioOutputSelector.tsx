// Module ID: 9206
// Function ID: 9207
// Name: showAudioOutputSelector
// Dependencies: [17, 9207, 1115, 4574, 9208, 1896, 2]
// Exports: showAudioOutputSelector

// Module 9206 (showAudioOutputSelector)
import _mod17 from "module_17" /* 17 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 9207 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9208, dependencyMap.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
