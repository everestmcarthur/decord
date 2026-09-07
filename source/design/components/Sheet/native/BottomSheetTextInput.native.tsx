// Module ID: 9761
// Function ID: 9762
// Name: BottomSheetTextInput
// Dependencies: [19, 21, 6626, 6624, 9762, 2]
// Exports: BottomSheetTextInput

// Module 9761 (BottomSheetTextInput)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("design/components/Sheet/native/BottomSheetTextInput.native.tsx");

export const BottomSheetTextInput = function BottomSheetTextInput(ref) {
  ref = ref.ref;
  ({ onFocus, onBlur } = ref);
  ref = undefined;
  const merged = Object.assign(ref, Object.create(null));
  ref = React.useRef(null);
  ({ onFocus: onFocus2, onBlur: onBlur2 } = ref(6626)({ onFocus, onBlur }));
  let obj = ref(6624);
  const keyboardBlurring = obj.useKeyboardBlurring(ref);
  obj = {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  };
  const tmp3 = ref(6626)({ onFocus, onBlur });
  const merged1 = Object.assign(merged);
  return jsx(ref(9762), {
    ref(current) {
      ref.current = current;
      if (typeof ref === "function") {
        tmp(current);
      } else if (null != tmp) {
        tmp.current = current;
      }
    },
    onFocus: onFocus2,
    onBlur: onBlur2
  });
};
