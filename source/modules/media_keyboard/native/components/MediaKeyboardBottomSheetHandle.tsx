// Module ID: 10646
// Function ID: 10647
// Dependencies: [19, 21, 8265, 1114, 8907, 2]

// Module 10646
import getSystemLocale from "getSystemLocale" /* 1114 */;
import map from "map" /* 8265 */;
import TwinButtons from "TwinButtons" /* 8907 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  let obj = map;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  obj = { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress };
  return jsx(TwinButtons.ActionSheetDragHandle, { onPress, accessibilityLabel: stringResult, "aria-hidden": null == onPress });
});
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;
