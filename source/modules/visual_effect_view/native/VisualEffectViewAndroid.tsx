// Module ID: 5022
// Function ID: 5023
// Name: VisualEffectViewAndroid
// Dependencies: [4586, 5020, 5021, 2]

// Module 5022 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5021 */;
import DeviceUtils from "DeviceUtils" /* 4586 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5020 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
