// Module ID: 5137
// Function ID: 5138
// Name: VisualEffectViewAndroid
// Dependencies: [4701, 5135, 5136, 2]

// Module 5137 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5136 */;
import DeviceUtils from "DeviceUtils" /* 4701 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5135 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
