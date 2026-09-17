// Module ID: 5055
// Function ID: 5056
// Name: VisualEffectViewAndroid
// Dependencies: [4619, 5053, 5054, 2]

// Module 5055 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5054 */;
import DeviceUtils from "DeviceUtils" /* 4619 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5053 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
