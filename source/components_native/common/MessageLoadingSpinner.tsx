// Module ID: 9704
// Function ID: 9705
// Name: MessageLoadingSpinner
// Dependencies: [19, 17, 21, 1115, 4308, 576, 5628, 2]
// Exports: default

// Module 9704 (MessageLoadingSpinner)
import nativeDefault from "native" /* 576 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5628 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let result = null;
if (!PlatformUtils.isAndroid()) {
  result = fn(17).requireNativeComponent("DCDMessageLoadingSpinner");
}
const size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/MessageLoadingSpinner.tsx");

export default function MessageLoadingSpinner(color) {
  color = color.color;
  if (color == null) {
    color = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (null != result) {
    const obj2 = {};
    const merged = Object.assign(color);
    obj2.color = color;
    let tmp8 = <tmp3 />;
  } else {
    const obj3 = { animating: color.animate };
    const merged1 = Object.assign(color);
    tmp8 = jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, { animating: color.animate });
  }
  return tmp8;
};
