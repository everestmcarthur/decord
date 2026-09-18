// Module ID: 6842
// Function ID: 6843
// Name: ScrollableContainer
// Dependencies: [19, 21, 6843, 6844, 6846]

// Module 6842 (ScrollableContainer)
import BottomSheetDraggableScrollable from "BottomSheetDraggableScrollable" /* 6843 */;
import _modDef6844 from "module_6844" /* 6844 */;
import _mod6846 from "module_6846" /* 6846 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ScrollableContainer = fn(19).forwardRef(function ScrollableContainer(arg0, ref) {
  ({ nativeGesture, refreshControl, onRefresh } = arg0);
  ({ refreshing, progressViewOffset, ScrollableComponent } = arg0);
  const merged = Object.assign(arg0, Object.assign({ nativeGesture: 0, refreshControl: 0, refreshing: 0, progressViewOffset: 0, onRefresh: 0, ScrollableComponent: 0 }));
  const obj = { scrollableGesture: nativeGesture, children: null };
  const merged1 = Object.assign(merged);
  obj.children = <ScrollableComponent ref={arg1} />;
  const tmp6 = jsx(BottomSheetDraggableScrollable.BottomSheetDraggableScrollable, { scrollableGesture: nativeGesture, children: null });
  let tmp2Result = tmp6;
  if (onRefresh) {
    const obj3 = { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod6846.styles.container, children: tmp6 };
    tmp2Result = jsx(_modDef6844, { scrollableGesture: nativeGesture, refreshing, progressViewOffset, onRefresh, style: _mod6846.styles.container, children: tmp6 });
  }
  return tmp2Result;
});
