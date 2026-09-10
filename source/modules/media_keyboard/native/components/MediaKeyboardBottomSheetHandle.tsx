// Module ID: 10673
// Function ID: 10674
// Name: MediaKeyboardBottomSheetHandle
// Dependencies: [19, 21, 8295, 1114, 8934, 2]

// Module 10673 (MediaKeyboardBottomSheetHandle)
import util from "util" /* 1114 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8295 */;
import native from "native" /* 8934 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default noop.memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  const derivedStateFromSharedValue = useStateFromSharedValue.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  return jsx(native.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
});
