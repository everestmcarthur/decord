// Module ID: 14326
// Function ID: 14327
// Name: PassthroughTouchView
// Dependencies: [19, 21, 14327, 2]
// Exports: default

// Module 14326 (PassthroughTouchView)
import PassthroughTouchNativeComponentDefault from "PassthroughTouchNativeComponent" /* 14327 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  const merged = Object.assign(onTouchDown, Object.assign({ onTouchDown: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onTouchDown = onTouchDown.onTouchDown;
  obj.pointerEvents = "box-none";
  return jsx(PassthroughTouchNativeComponentDefault, {});
};
