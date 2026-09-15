// Module ID: 5054
// Function ID: 5055
// Name: VisualEffectViewAndroid
// Dependencies: [4618, 5052, 5053, 2]

// Module 5054 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5053 */;
import DeviceUtils from "DeviceUtils" /* 4618 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5052 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
