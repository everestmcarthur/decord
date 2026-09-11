// Module ID: 13876
// Function ID: 13877
// Name: dispatchAutoDisableVideo
// Dependencies: [4631, 573, 2]
// Exports: default

// Module 13876 (dispatchAutoDisableVideo)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 4631 */;
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
