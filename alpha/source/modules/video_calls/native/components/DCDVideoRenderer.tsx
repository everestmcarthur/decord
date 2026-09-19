// Module ID: 9702
// Function ID: 9703
// Name: DCDVideoRenderer
// Dependencies: [5177, 9703, 2]

// Module 9702 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9703 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5177 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
