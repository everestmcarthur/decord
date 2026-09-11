// Module ID: 17086
// Function ID: 17087
// Name: VideoActionCreators
// Dependencies: [573, 2]
// Exports: updateVideoSize

// Module 17086 (VideoActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media/VideoActionCreators.tsx");

export const updateVideoSize = function updateVideoSize(streamId, size, sharedValue2) {
  DispatcherDefault.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId, dimensions: size, zoom: sharedValue2 });
};
