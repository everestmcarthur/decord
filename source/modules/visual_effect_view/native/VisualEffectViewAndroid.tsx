// Module ID: 5020
// Function ID: 5021
// Name: VisualEffectViewAndroid
// Dependencies: [4584, 5018, 5019, 2]

// Module 5020 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5019 */;
import DeviceUtils from "DeviceUtils" /* 4584 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5018 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
