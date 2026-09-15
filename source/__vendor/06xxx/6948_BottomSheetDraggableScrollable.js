// Module ID: 6948
// Function ID: 6949
// Name: BottomSheetDraggableScrollable
// Dependencies: [19, 21, 6760]
// Exports: BottomSheetDraggableScrollable

// Module 6948 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 6760 */;
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
