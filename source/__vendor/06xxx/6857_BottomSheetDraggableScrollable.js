// Module ID: 6857
// Function ID: 6858
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6669]
// Exports: BottomSheetDraggableScrollable

// Module 6857 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6669 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: scrollableGesture, children };
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
};
