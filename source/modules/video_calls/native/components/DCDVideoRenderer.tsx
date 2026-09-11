// Module ID: 9707
// Function ID: 9708
// Name: DCDVideoRenderer
// Dependencies: [5019, 9708, 2]

// Module 9707 (DCDVideoRenderer)
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9708 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5019 */;

const obj = { componentName: "DCDVideoRenderer", componentFoundInstance: null };
obj.componentFoundInstance = VideoRendererNativeComponentDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DCDVideoRenderer.tsx");

export default requireNativeComponentOrDefault(obj);
