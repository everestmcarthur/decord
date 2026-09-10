// Module ID: 13848
// Function ID: 13849
// Name: dispatchAutoDisableVideo
// Dependencies: [4599, 573, 2]
// Exports: default

// Module 13848 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4599 */;
import size from "module_2" /* 2 */;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(userId, videoToggleState) {
  importDefault = userId;
  dependencyMap = videoToggleState;
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: MediaEngineContextTypes.DEFAULT, userId, videoToggleState, persist: false, isAutomatic: true });
  });
};
