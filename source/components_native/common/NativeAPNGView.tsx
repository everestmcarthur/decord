// Module ID: 10268
// Function ID: 10269
// Name: NativeAPNGView
// Dependencies: [17, 1115, 10269, 2]

// Module 10268 (NativeAPNGView)
import _mod17 from "module_17" /* 17 */;
import APNGStickerNativeComponent from "APNGStickerNativeComponent" /* 10269 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isAndroid()) {
  let _default = APNGStickerNativeComponent.default;
} else {
  _default = _mod17.requireNativeComponent("APNGStickerView");
}
const result = size.fileFinishedImporting("components_native/common/NativeAPNGView.tsx");

export default _default;
