// Module ID: 16910
// Function ID: 16911
// Name: VisualEffectViewTarget
// Dependencies: [17, 1150, 16911, 2]

// Module 16910 (VisualEffectViewTarget)
import _mod17 from "module_17" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 16911 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
